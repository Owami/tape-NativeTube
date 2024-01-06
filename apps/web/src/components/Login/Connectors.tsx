import useProfileStore from '@lib/store/idb/profile'
import { Callout, Flex } from '@radix-ui/themes'
import { Button, CheckOutline, WarningOutline } from '@tape.xyz/ui'
import React from 'react'
import type { Connector } from 'wagmi'
import { useAccount, useConnect } from 'wagmi'

import Authenticate from './Authenticate'

const Connectors = () => {
  const { activeProfile } = useProfileStore()

  const { connector: connected } = useAccount()
  const { connectors, connectAsync, isPending, error } = useConnect()

  if (activeProfile?.id) {
    return <Authenticate />
  }

  const onChooseConnector = async (connector: Connector) => {
    try {
      await connectAsync({ connector })
    } catch {}
  }

  const getConnectorName = (connector: Connector) => {
    switch (connector.id) {
      case 'walletConnect':
        return 'Other Wallets'
      default:
        return connector.name
    }
  }

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-2">
        {connectors.map((c) => (
          <Button
            key={c.id}
            variant="secondary"
            onClick={() => onChooseConnector(c)}
            disabled={c.id === connected?.id || isPending}
          >
            <Flex justify="between" align="center" className="w-full">
              <span>{getConnectorName(c)}</span>
              {c.id === connected?.id && <CheckOutline className="size-3" />}
            </Flex>
          </Button>
        ))}
      </div>
      <Authenticate />
      {error?.message ? (
        <Callout.Root color="red">
          <Callout.Icon>
            <WarningOutline className="size-4" />
          </Callout.Icon>
          <Callout.Text highContrast>
            {error?.message ?? 'Failed to connect'}
          </Callout.Text>
        </Callout.Root>
      ) : null}
    </div>
  )
}

export default Connectors
