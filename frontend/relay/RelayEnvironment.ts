import { Environment, Network, RecordSource, Store } from 'relay-runtime'

const fetchQuery = async (operation: any, variables: any) => {
  try {
    const response = await fetch('http://10.0.2.2:4000/graphql', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        query: operation.text,
        variables,
      }),
    })

    return await response.json()
  } catch {
    return {}
  }
}

export const RelayEnvironment = new Environment({
  network: Network.create(fetchQuery),
  store: new Store(new RecordSource()),
})
