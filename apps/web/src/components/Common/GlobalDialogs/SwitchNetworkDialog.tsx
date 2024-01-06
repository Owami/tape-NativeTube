import useNetworkStore from '@lib/store/network'
import { Button, Dialog, Flex, IconButton } from '@radix-ui/themes'
import { POLYGON_CHAIN_ID } from '@tape.xyz/constants'
import { TimesOutline } from '@tape.xyz/ui'
import React from 'react'
import { useSwitchChain } from 'wagmi'

const SwitchNetworkDialog = () => {
  const { showSwitchNetwork, setShowSwitchNetwork } = useNetworkStore()
  const { switchChainAsync } = useSwitchChain()

  return (
    <Dialog.Root open={showSwitchNetwork} onOpenChange={setShowSwitchNetwork}>
      <Dialog.Content style={{ maxWidth: 450 }}>
        <Flex justify="between" pb="2" align="center">
          <Dialog.Title mb="0">Change network</Dialog.Title>
          <Dialog.Close>
            <IconButton variant="ghost" color="gray">
              <TimesOutline outlined={false} className="size-3" />
            </IconButton>
          </Dialog.Close>
        </Flex>
        <Dialog.Description mb="5">
          Connect to the right network to continue
        </Dialog.Description>

        <div className="mb-4 space-y-1">
          <div className="lt-text-gray-500 text-sm"></div>
        </div>
        <Flex justify="end">
          <Button
            color="red"
            onClick={async () => {
              await switchChainAsync?.({ chainId: POLYGON_CHAIN_ID })
              setShowSwitchNetwork(false)
            }}
          >
            Switch Network
          </Button>
        </Flex>
      </Dialog.Content>
    </Dialog.Root>
  )
}

export default SwitchNetworkDialog
