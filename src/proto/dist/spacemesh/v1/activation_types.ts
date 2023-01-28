/* eslint-disable */
import _m0 from "protobufjs/minimal";
import { Activation } from "./types";

export const protobufPackage = "spacemesh.v1";

export interface GetRequest {
  readonly id: Uint8Array;
}

export interface GetResponse {
  readonly atx: Activation | undefined;
}

function createBaseGetRequest(): GetRequest {
  return { id: new Uint8Array() };
}

export const GetRequest = {
  encode(message: GetRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id.length !== 0) {
      writer.uint32(10).bytes(message.id);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetRequest() as any;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GetRequest {
    return { id: isSet(object.id) ? bytesFromBase64(object.id) : new Uint8Array() };
  },

  toJSON(message: GetRequest): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = base64FromBytes(message.id !== undefined ? message.id : new Uint8Array()));
    return obj;
  },

  create(base?: DeepPartial<GetRequest>): GetRequest {
    return GetRequest.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<GetRequest>): GetRequest {
    const message = createBaseGetRequest() as any;
    message.id = object.id ?? new Uint8Array();
    return message;
  },
};

function createBaseGetResponse(): GetResponse {
  return { atx: undefined };
}

export const GetResponse = {
  encode(message: GetResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.atx !== undefined) {
      Activation.encode(message.atx, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetResponse() as any;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.atx = Activation.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GetResponse {
    return { atx: isSet(object.atx) ? Activation.fromJSON(object.atx) : undefined };
  },

  toJSON(message: GetResponse): unknown {
    const obj: any = {};
    message.atx !== undefined && (obj.atx = message.atx ? Activation.toJSON(message.atx) : undefined);
    return obj;
  },

  create(base?: DeepPartial<GetResponse>): GetResponse {
    return GetResponse.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<GetResponse>): GetResponse {
    const message = createBaseGetResponse() as any;
    message.atx = (object.atx !== undefined && object.atx !== null) ? Activation.fromPartial(object.atx) : undefined;
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

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
