import React from 'react'
import { Card, CardContent, Typography } from '@mui/material'


const CardComponent = ({ title, cost, textColor }) => {
  return (
    <Card variant='outlined'>
            <CardContent>
                <Typography sx={{ fontSize: 25 }}>
                    {title}
                </Typography>

                <Typography sx={{ fontSize: 20, textAlign:'center', color: textColor }}>
                    {cost}
                </Typography>

            </CardContent>
    </Card>
  )
}

export default CardComponent