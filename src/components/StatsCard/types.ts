export type StatsCardProps = ContainerProps & {
  stats: number
  subtitle: string
}

export type ContainerProps = {
  type?: 'base' | 'offDiet' | 'withinDiet'
}
