interface HeadingProps {
    title: string
}

const Heading = ({ title }: HeadingProps) => {
  return (
    <h2 className="text-lg text-center font-semibold text-gray-900 dark:text-white mb-4">{title}</h2>
  )
}

export default Heading;