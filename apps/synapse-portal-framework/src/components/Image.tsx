import { ComponentType, SVGProps } from 'react'

export type ImageProps = {
  Svg?: ComponentType<SVGProps<SVGSVGElement>>
  imgSrc?: string | undefined
  className?: string
}
export default function Image(props: ImageProps) {
  const { Svg, imgSrc, className } = props

  if (Svg) {
    return <Svg className={className} />
  } else if (imgSrc) {
    return <img src={imgSrc} className={className} />
  } else {
    return <></>
  }
}
