import { Box, Typography } from "@mui/material"

const Title = ({title, description, titleColor, descriptionColor, descriptionHeight}) => {
  return (
      <Box container marginTop={10} marginBottom={3} textAlign={'center'}>
          <Typography variant="h3" fontWeight={'bold'} marginBottom={2} color={titleColor}>
        {title}
    </Typography>
          <Typography variant="body1" margin={'auto'} maxWidth={descriptionHeight} color={descriptionColor}>
        {description}
    </Typography>
   </Box>
  )
}

export default Title