/**
 * @generated SignedSource<<ea7c5ad92c4b130ab1bfee6506090648>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from 'relay-runtime';
export type matchesQuery$variables = Record<PropertyKey, never>;
export type matchesQuery$data = {
  readonly getMatches: ReadonlyArray<{
    readonly date: string | null | undefined;
    readonly id: string | null | undefined;
    readonly oddsA: {
      readonly id: string | null | undefined;
      readonly moneyline: number | null | undefined;
      readonly spread: number | null | undefined;
      readonly spreadOdds: number | null | undefined;
      readonly total: number | null | undefined;
      readonly totalOverOdds: number | null | undefined;
      readonly totalUnderOdds: number | null | undefined;
    } | null | undefined;
    readonly oddsB: {
      readonly id: string | null | undefined;
      readonly moneyline: number | null | undefined;
      readonly spread: number | null | undefined;
      readonly spreadOdds: number | null | undefined;
      readonly total: number | null | undefined;
      readonly totalOverOdds: number | null | undefined;
      readonly totalUnderOdds: number | null | undefined;
    } | null | undefined;
    readonly teamA: {
      readonly id: string | null | undefined;
      readonly image: string | null | undefined;
      readonly name: string | null | undefined;
    } | null | undefined;
    readonly teamB: {
      readonly id: string | null | undefined;
      readonly image: string | null | undefined;
      readonly name: string | null | undefined;
    } | null | undefined;
  } | null | undefined> | null | undefined;
};
export type matchesQuery = {
  response: matchesQuery$data;
  variables: matchesQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v1 = [
  (v0/*: any*/),
  {
    "alias": null,
    "args": null,
    "kind": "ScalarField",
    "name": "name",
    "storageKey": null
  },
  {
    "alias": null,
    "args": null,
    "kind": "ScalarField",
    "name": "image",
    "storageKey": null
  }
],
v2 = [
  (v0/*: any*/),
  {
    "alias": null,
    "args": null,
    "kind": "ScalarField",
    "name": "moneyline",
    "storageKey": null
  },
  {
    "alias": null,
    "args": null,
    "kind": "ScalarField",
    "name": "spread",
    "storageKey": null
  },
  {
    "alias": null,
    "args": null,
    "kind": "ScalarField",
    "name": "spreadOdds",
    "storageKey": null
  },
  {
    "alias": null,
    "args": null,
    "kind": "ScalarField",
    "name": "total",
    "storageKey": null
  },
  {
    "alias": null,
    "args": null,
    "kind": "ScalarField",
    "name": "totalOverOdds",
    "storageKey": null
  },
  {
    "alias": null,
    "args": null,
    "kind": "ScalarField",
    "name": "totalUnderOdds",
    "storageKey": null
  }
],
v3 = [
  {
    "alias": null,
    "args": null,
    "concreteType": "Match",
    "kind": "LinkedField",
    "name": "getMatches",
    "plural": true,
    "selections": [
      (v0/*: any*/),
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "date",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "concreteType": "Team",
        "kind": "LinkedField",
        "name": "teamA",
        "plural": false,
        "selections": (v1/*: any*/),
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "concreteType": "Team",
        "kind": "LinkedField",
        "name": "teamB",
        "plural": false,
        "selections": (v1/*: any*/),
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "concreteType": "Odds",
        "kind": "LinkedField",
        "name": "oddsA",
        "plural": false,
        "selections": (v2/*: any*/),
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "concreteType": "Odds",
        "kind": "LinkedField",
        "name": "oddsB",
        "plural": false,
        "selections": (v2/*: any*/),
        "storageKey": null
      }
    ],
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "matchesQuery",
    "selections": (v3/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "matchesQuery",
    "selections": (v3/*: any*/)
  },
  "params": {
    "cacheID": "faf1a360f2b99fa28f33da40029dc245",
    "id": null,
    "metadata": {},
    "name": "matchesQuery",
    "operationKind": "query",
    "text": "query matchesQuery {\n  getMatches {\n    id\n    date\n    teamA {\n      id\n      name\n      image\n    }\n    teamB {\n      id\n      name\n      image\n    }\n    oddsA {\n      id\n      moneyline\n      spread\n      spreadOdds\n      total\n      totalOverOdds\n      totalUnderOdds\n    }\n    oddsB {\n      id\n      moneyline\n      spread\n      spreadOdds\n      total\n      totalOverOdds\n      totalUnderOdds\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "3cd05b4177362de551fa04db7c1c9561";

export default node;
