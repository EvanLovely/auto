import * as Auto from '@auto-it/core';
import makeCommitFromMsg from '@auto-it/core/dist/__tests__/make-commit-from-msg';
import Changelog from '@auto-it/core/dist/changelog';
import {
  makeChangelogHooks,
  makeHooks
} from '@auto-it/core/dist/utils/make-hooks';

import FirstTimeContributor from '../src';

const exec = jest.fn();
exec.mockReturnValue('');
// @ts-ignore
jest.spyOn(Auto, 'execPromise').mockImplementation(exec);

const setup = () => {
  const plugin = new FirstTimeContributor();
  const hooks = makeHooks();
  const changelogHooks = makeChangelogHooks();

  plugin.apply({ hooks } as Auto.Auto);
  hooks.onCreateChangelog.call(
    {
      hooks: changelogHooks,
      options: { baseUrl: 'https://github.com' }
    } as Changelog,
    Auto.SEMVER.patch
  );

  return changelogHooks;
};

describe('First Time Contributor Plugin', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  test('should include all authors with no past contributors', async () => {
    const hooks = setup();
    const commits = [
      makeCommitFromMsg('foo', { name: 'Jeff' }),
      makeCommitFromMsg('foo', { name: 'Andrew' })
    ];

    expect(await hooks.addToBody.promise([], commits)).toMatchSnapshot();
  });

  test('should exclude a past contributor', async () => {
    const hooks = setup();
    const commits = [
      makeCommitFromMsg('foo', { name: 'Jeff' }),
      makeCommitFromMsg('foo', { name: 'Andrew' })
    ];
    exec.mockReturnValueOnce('Andrew');

    expect(await hooks.addToBody.promise([], commits)).toMatchSnapshot();
  });

  test('should not include past contributors', async () => {
    const hooks = setup();
    const commits = [
      makeCommitFromMsg('foo', { name: 'Jeff' }),
      makeCommitFromMsg('foo', { name: 'Andrew' })
    ];
    exec.mockReturnValueOnce('Jeff');
    exec.mockReturnValueOnce('Andrew');

    expect(await hooks.addToBody.promise([], commits)).toMatchSnapshot();
  });

  test('should not include past contributors - email', async () => {
    const hooks = setup();
    const commits = [
      makeCommitFromMsg('foo', { name: 'Jeff', email: 'Jeff@email.com' })
    ];
    exec.mockReturnValueOnce('Jeff@email.com');

    expect(await hooks.addToBody.promise([], commits)).toMatchSnapshot();
  });

  test('should include a username if it exists', async () => {
    const hooks = setup();
    const commits = [
      makeCommitFromMsg('foo', { name: 'Jeff', username: 'jeff-the-snake' }),
      makeCommitFromMsg('foo', { name: 'Andrew', username: 'hipstersmoothie' })
    ];

    expect(await hooks.addToBody.promise([], commits)).toMatchSnapshot();
  });

  test('should include only username if no name exists', async () => {
    const hooks = setup();
    const commits = [
      makeCommitFromMsg('foo', { username: 'jeff-the-snake', name: '' })
    ];

    console.log(commits);

    expect(await hooks.addToBody.promise([], commits)).toMatchSnapshot();
  });
});
