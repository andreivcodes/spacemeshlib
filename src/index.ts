import {
  generatePrivateKey,
  generatePublicKey,
  signMessage,
  verifyMessage,
  signTransaction,
  derivePrivateKey,
  derivePublicKey,
  toHexString,
} from './util';

import * as debug from './proto/dist/spacemesh/v1/debug';
import * as debug_types from './proto/dist/spacemesh/v1/debug_types';
import * as gateway from './proto/dist/spacemesh/v1/gateway';
import * as gateway_types from './proto/dist/spacemesh/v1/gateway_types';
import * as global_state from './proto/dist/spacemesh/v1/global_state';
import * as global_state_types from './proto/dist/spacemesh/v1/global_state_types';
import * as mesh from './proto/dist/spacemesh/v1/mesh';
import * as mesh_types from './proto/dist/spacemesh/v1/mesh_types';
import * as node from './proto/dist/spacemesh/v1/node';
import * as node_types from './proto/dist/spacemesh/v1/node_types';
import * as smesher from './proto/dist/spacemesh/v1/smesher';
import * as smesher_types from './proto/dist/spacemesh/v1/smesher_types';
import * as tx from './proto/dist/spacemesh/v1/tx';
import * as tx_types from './proto/dist/spacemesh/v1/tx_types';
import * as types from './proto/dist/spacemesh/v1/types';

declare global {
  var Go: any;
}

export default {
  generatePrivateKey,
  generatePublicKey,
  signMessage,
  verifyMessage,
  signTransaction,
  derivePrivateKey,
  derivePublicKey,
  toHexString,
  debug,
  debug_types,
  gateway,
  gateway_types,
  global_state,
  global_state_types,
  mesh,
  mesh_types,
  node,
  node_types,
  smesher,
  smesher_types,
  tx,
  tx_types,
  types,
};
