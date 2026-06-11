interface HeadingProps {
    title: string,
    style?: string
}

const Heading = ({ title, style }: HeadingProps) => {
  return (
    <h2 className={`text-lg font-semibold text-gray-900 dark:text-white ${style}`}>{title}</h2>
  )
}

export default Heading;