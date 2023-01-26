/* eslint-disable */
import _m0 from "protobufjs/minimal";

export const protobufPackage = "spacemesh.v1";

export interface VerifyChallengeRequest {
  challenge: Uint8Array;
  signature: Uint8Array;
}

export interface VerifyChallengeResponse {
  hash: Uint8Array;
  nodeId: Uint8Array;
}

function createBaseVerifyChallengeRequest(): VerifyChallengeRequest {
  return { challenge: new Uint8Array(), signature: new Uint8Array() };
}

export const VerifyChallengeRequest = {
  encode(message: VerifyChallengeRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.challenge.length !== 0) {
      writer.uint32(10).bytes(message.challenge);
    }
    if (message.signature.length !== 0) {
      writer.uint32(18).bytes(message.signature);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): VerifyChallengeRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseVerifyChallengeRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.challenge = reader.bytes();
          break;
        case 2:
          message.signature = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): VerifyChallengeRequest {
    return {
      challenge: isSet(object.challenge) ? bytesFromBase64(object.challenge) : new Uint8Array(),
      signature: isSet(object.signature) ? bytesFromBase64(object.signature) : new Uint8Array(),
    };
  },

  toJSON(message: VerifyChallengeRequest): unknown {
    const obj: any = {};
    message.challenge !== undefined &&
      (obj.challenge = base64FromBytes(message.challenge !== undefined ? message.challenge : new Uint8Array()));
    message.signature !== undefined &&
      (obj.signature = base64FromBytes(message.signature !== undefined ? message.signature : new Uint8Array()));
    return obj;
  },

  create<I extends Exact<DeepPartial<VerifyChallengeRequest>, I>>(base?: I): VerifyChallengeRequest {
    return VerifyChallengeRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<VerifyChallengeRequest>, I>>(object: I): VerifyChallengeRequest {
    const message = createBaseVerifyChallengeRequest();
    message.challenge = object.challenge ?? new Uint8Array();
    message.signature = object.signature ?? new Uint8Array();
    return message;
  },
};

function createBaseVerifyChallengeResponse(): VerifyChallengeResponse {
  return { hash: new Uint8Array(), nodeId: new Uint8Array() };
}

export const VerifyChallengeResponse = {
  encode(message: VerifyChallengeResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.hash.length !== 0) {
      writer.uint32(10).bytes(message.hash);
    }
    if (message.nodeId.length !== 0) {
      writer.uint32(18).bytes(message.nodeId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): VerifyChallengeResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseVerifyChallengeResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.hash = reader.bytes();
          break;
        case 2:
          message.nodeId = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): VerifyChallengeResponse {
    return {
      hash: isSet(object.hash) ? bytesFromBase64(object.hash) : new Uint8Array(),
      nodeId: isSet(object.nodeId) ? bytesFromBase64(object.nodeId) : new Uint8Array(),
    };
  },

  toJSON(message: VerifyChallengeResponse): unknown {
    const obj: any = {};
    message.hash !== undefined &&
      (obj.hash = base64FromBytes(message.hash !== undefined ? message.hash : new Uint8Array()));
    message.nodeId !== undefined &&
      (obj.nodeId = base64FromBytes(message.nodeId !== undefined ? message.nodeId : new Uint8Array()));
    return obj;
  },

  create<I extends Exact<DeepPartial<VerifyChallengeResponse>, I>>(base?: I): VerifyChallengeResponse {
    return VerifyChallengeResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<VerifyChallengeResponse>, I>>(object: I): VerifyChallengeResponse {
    const message = createBaseVerifyChallengeResponse();
    message.hash = object.hash ?? new Uint8Array();
    message.nodeId = object.nodeId ?? new Uint8Array();
    return message;
  },
};

declare var self: any | undefined;
declare var window: any | undefined;
declare var global: any | undefined;
var tsProtoGlobalThis: any = (() => {
  if (typeof globalThis !== "undefined") {
    return globalThis;
  }
  if (typeof self !== "undefined") {
    return self;
  }
  if (typeof window !== "undefined") {
    return window;
  }
  if (typeof global !== "undefined") {
    return global;
  }
  throw "Unable to locate global object";
})();

function bytesFromBase64(b64: string): Uint8Array {
  if (tsProtoGlobalThis.Buffer) {
    return Uint8Array.from(tsProtoGlobalThis.Buffer.from(b64, "base64"));
  } else {
    const bin = tsProtoGlobalThis.atob(b64);
    const arr = new Uint8Array(bin.length);
    for (let i = 0; i < bin.length; ++i) {
      arr[i] = bin.charCodeAt(i);
    }
    return arr;
  }
}

function base64FromBytes(arr: Uint8Array): string {
  if (tsProtoGlobalThis.Buffer) {
    return tsProtoGlobalThis.Buffer.from(arr).toString("base64");
  } else {
    const bin: string[] = [];
    arr.forEach((byte) => {
      bin.push(String.fromCharCode(byte));
    });
    return tsProtoGlobalThis.btoa(bin.join(""));
  }
}

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & { [K in Exclude<keyof I, KeysOfUnion<P>>]: never };

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
