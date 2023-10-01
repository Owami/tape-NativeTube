import type { SVGProps } from 'react'
import React from 'react'

const TimesOutline = ({
  outlined = true,
  ...props
}: SVGProps<SVGSVGElement> & {
  outlined?: boolean
}) => (
  <svg
    {...props}
    viewBox="0 0 23 23"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    {outlined ? (
      <>
        <path
          d="M9.0303 7.96967C8.73741 7.67678 8.26253 7.67678 7.96964 7.96967C7.67675 8.26256 7.67675 8.73744 7.96964 9.03033L9.93932 11L7.96966 12.9697C7.67677 13.2626 7.67677 13.7374 7.96966 14.0303C8.26255 14.3232 8.73743 14.3232 9.03032 14.0303L11 12.0607L12.9696 14.0303C13.2625 14.3232 13.7374 14.3232 14.0303 14.0303C14.3232 13.7374 14.3232 13.2625 14.0303 12.9697L12.0606 11L14.0303 9.03035C14.3232 8.73746 14.3232 8.26258 14.0303 7.96969C13.7374 7.6768 13.2625 7.6768 12.9696 7.96969L11 9.93935L9.0303 7.96967Z"
          fill="currentColor"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M11.0574 0.25H10.9426C8.63424 0.249988 6.82519 0.249978 5.41371 0.439747C3.96897 0.633987 2.82895 1.03933 1.93414 1.93414C1.03933 2.82895 0.633987 3.96897 0.439747 5.41371C0.249978 6.82519 0.249988 8.63422 0.25 10.9426V11.0574C0.249988 13.3658 0.249978 15.1748 0.439747 16.5863C0.633987 18.031 1.03933 19.1711 1.93414 20.0659C2.82895 20.9607 3.96897 21.366 5.41371 21.5603C6.82519 21.75 8.63423 21.75 10.9426 21.75H11.0574C13.3658 21.75 15.1748 21.75 16.5863 21.5603C18.031 21.366 19.1711 20.9607 20.0659 20.0659C20.9607 19.1711 21.366 18.031 21.5603 16.5863C21.75 15.1748 21.75 13.3658 21.75 11.0574V10.9426C21.75 8.63423 21.75 6.82519 21.5603 5.41371C21.366 3.96897 20.9607 2.82895 20.0659 1.93414C19.1711 1.03933 18.031 0.633987 16.5863 0.439747C15.1748 0.249978 13.3658 0.249988 11.0574 0.25ZM2.9948 2.9948C3.56445 2.42514 4.33517 2.09825 5.61358 1.92637C6.91356 1.75159 8.62177 1.75 11 1.75C13.3782 1.75 15.0864 1.75159 16.3864 1.92637C17.6648 2.09825 18.4355 2.42514 19.0052 2.9948C19.5749 3.56445 19.9018 4.33517 20.0736 5.61358C20.2484 6.91356 20.25 8.62177 20.25 11C20.25 13.3782 20.2484 15.0864 20.0736 16.3864C19.9018 17.6648 19.5749 18.4355 19.0052 19.0052C18.4355 19.5749 17.6648 19.9018 16.3864 20.0736C15.0864 20.2484 13.3782 20.25 11 20.25C8.62177 20.25 6.91356 20.2484 5.61358 20.0736C4.33517 19.9018 3.56445 19.5749 2.9948 19.0052C2.42514 18.4355 2.09825 17.6648 1.92637 16.3864C1.75159 15.0864 1.75 13.3782 1.75 11C1.75 8.62177 1.75159 6.91356 1.92637 5.61358C2.09825 4.33517 2.42514 3.56445 2.9948 2.9948Z"
          fill="currentColor"
        />
      </>
    ) : (
      <path
        d="M1 22L22 1M1 1L22 22"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="currentColor"
      />
    )}
  </svg>
)

export default TimesOutline
