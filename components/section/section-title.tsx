import {
  VStack,
  Heading,
  Box,
  StackProps,
  useMultiStyleConfig,
} from '@chakra-ui/react'

export interface SectionTitleProps extends Omit<StackProps, 'title'> {
  title: React.ReactNode
  description?: React.ReactNode
  align?: 'left' | 'center'
  variant?: string
  size?: string
}

export const SectionTitle: React.FC<SectionTitleProps> = (props) => {
  const { title, description, align, variant, size, ...rest } = props
  const styles = useMultiStyleConfig('SectionTitle', { variant })

  const titleStyles = { ...styles.title }
  if (size) {
    delete titleStyles.fontSize
  }

  return (
    <VStack
      sx={styles.wrapper}
      alignItems={align === 'left' ? 'flex-start' : 'center'}
      spacing={4}
      {...rest}
    >
      <Heading sx={titleStyles} as="h2" fontSize={size}>
        {title}
      </Heading>
      {description && (
        <Box sx={styles.description} textAlign={align}>
          {description}
        </Box>
      )}
    </VStack>
  )
}
