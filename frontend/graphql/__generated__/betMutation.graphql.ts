/**
 * @generated SignedSource<<67e97502f2247ee200a95bc42eb7023e>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from 'relay-runtime';
export type betMutation$variables = {
  betType: string;
  currency: string;
  matchId: string;
  odds: number;
  spreadValue?: number | null | undefined;
  teamId: string;
  totalType?: string | null | undefined;
  userId: string;
  wagerAmount: number;
};
export type betMutation$data = {
  readonly placeBet: {
    readonly betType: string | null | undefined;
    readonly id: string | null | undefined;
    readonly odds: number | null | undefined;
    readonly wagerAmount: number | null | undefined;
  } | null | undefined;
};
export type betMutation = {
  response: betMutation$data;
  variables: betMutation$variables;
};

const node: ConcreteRequest = (function(){
var v0 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "betType"
},
v1 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "currency"
},
v2 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "matchId"
},
v3 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "odds"
},
v4 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "spreadValue"
},
v5 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "teamId"
},
v6 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "totalType"
},
v7 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "userId"
},
v8 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "wagerAmount"
},
v9 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "betType",
        "variableName": "betType"
      },
      {
        "kind": "Variable",
        "name": "currency",
        "variableName": "currency"
      },
      {
        "kind": "Variable",
        "name": "matchId",
        "variableName": "matchId"
      },
      {
        "kind": "Variable",
        "name": "odds",
        "variableName": "odds"
      },
      {
        "kind": "Variable",
        "name": "spreadValue",
        "variableName": "spreadValue"
      },
      {
        "kind": "Variable",
        "name": "teamId",
        "variableName": "teamId"
      },
      {
        "kind": "Variable",
        "name": "totalType",
        "variableName": "totalType"
      },
      {
        "kind": "Variable",
        "name": "userId",
        "variableName": "userId"
      },
      {
        "kind": "Variable",
        "name": "wagerAmount",
        "variableName": "wagerAmount"
      }
    ],
    "concreteType": "Bet",
    "kind": "LinkedField",
    "name": "placeBet",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "id",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "betType",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "odds",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "wagerAmount",
        "storageKey": null
      }
    ],
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": [
      (v0/*: any*/),
      (v1/*: any*/),
      (v2/*: any*/),
      (v3/*: any*/),
      (v4/*: any*/),
      (v5/*: any*/),
      (v6/*: any*/),
      (v7/*: any*/),
      (v8/*: any*/)
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "betMutation",
    "selections": (v9/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [
      (v7/*: any*/),
      (v2/*: any*/),
      (v5/*: any*/),
      (v0/*: any*/),
      (v3/*: any*/),
      (v8/*: any*/),
      (v1/*: any*/),
      (v4/*: any*/),
      (v6/*: any*/)
    ],
    "kind": "Operation",
    "name": "betMutation",
    "selections": (v9/*: any*/)
  },
  "params": {
    "cacheID": "f2f0f066c5b864e83415692c21f5ebe3",
    "id": null,
    "metadata": {},
    "name": "betMutation",
    "operationKind": "mutation",
    "text": "mutation betMutation(\n  $userId: String!\n  $matchId: String!\n  $teamId: String!\n  $betType: String!\n  $odds: Float!\n  $wagerAmount: Float!\n  $currency: String!\n  $spreadValue: Float\n  $totalType: String\n) {\n  placeBet(userId: $userId, matchId: $matchId, teamId: $teamId, betType: $betType, odds: $odds, wagerAmount: $wagerAmount, currency: $currency, spreadValue: $spreadValue, totalType: $totalType) {\n    id\n    betType\n    odds\n    wagerAmount\n  }\n}\n"
  }
};
})();

(node as any).hash = "5bcc61a2bac7de46a2500cf04de05609";

export default node;
