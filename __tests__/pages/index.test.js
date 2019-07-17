import React from 'react';
import renderer from 'react-test-renderer';

import { IndexPage } from '../../src/pages';

const testContent = {
  block_height: 1110117,
  council: {
    election_stage: 'Announcing',
    members_count: 12,
  },
  forum: {
    posts: 11,
    threads: 7,
  },
  media: {
    media_files: 9,
  },
  memberships: {
    platform_members: 164,
  },
  roles: {
    storage_providers: 10,
  },
  runtime_version: {
    impl_name: 'joystream-node',
    spec_name: 'joystream-node',
    spec_version: 4,
  },
  system: {
    chain: 'Joystream Testnet v2',
    name: 'joystream-node',
    peerCount: 29,
    version: '1.0.0',
  },
  validators: {
    count: 20,
    total_stake: '45658',
  },
};

describe('IndexPage page', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<IndexPage content={testContent} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});