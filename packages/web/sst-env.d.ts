/* This file is auto-generated by SST. Do not edit. */
/* tslint:disable */
/* eslint-disable */
/* deno-fmt-ignore-file */
import "sst"
export {}
declare module "sst" {
  export interface Resource {
    "API": {
      "type": "sst.cloudflare.Worker"
      "url": string
    }
    "API_VERSION": {
      "type": "sst.sst.Secret"
      "value": string
    }
    "CLOUDFLARE_ACCOUNT_ID": {
      "type": "sst.sst.Secret"
      "value": string
    }
    "CLOUDFLARE_API_TOKEN": {
      "type": "sst.sst.Secret"
      "value": string
    }
    "DATABASE_ID": {
      "type": "sst.sst.Secret"
      "value": string
    }
    "Database": {
      "type": "sst.cloudflare.D1"
    }
    "MusicBucket": {
      "type": "sst.cloudflare.Bucket"
    }
  }
}
