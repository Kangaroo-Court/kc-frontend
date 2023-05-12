import Image from 'next/image'

type ImageActionLayoutProps = {
  imageSrc: string
  imageAlt: string
  actionNode: React.ReactNode
}
const ImageActionLayout: React.FC<ImageActionLayoutProps> = ({
  imageSrc,
  imageAlt,
  actionNode,
}) => {
  return (
    <div
      className="flex h-full w-full items-center justify-end 
"
    >
      <span
        className="fixed left-0 h-full w-1/2 py-10
"
      >
        <Image src={imageSrc} alt={imageAlt} fill />
      </span>
      <div className="flex w-1/2 items-center justify-center">{actionNode}</div>
    </div>
  )
}
export default ImageActionLayout
