import React from 'react'
import { Box, Container, Hidden, Table, TableBody, TableCell, TableHead, TableRow, Typography } from '@material-ui/core'
import Title from '../../ui/Title'
import { images } from '../../images'
import { customTheme } from '../../theme'
import { marketLinks, markets } from '../../constants'
import BuyPancake from '../../components/BuyPancake'

const Markets = () => {
  return (
        <Box>
            <Container>
                <Title title="Markets" subtitle="A list of exchanges that have Safemoon currently listed" logo="market" width={120}/>
            </Container>
            <BuyPancake/>
            <Container>
                <Box py={6} >
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell><Typography variant="body2" color="primary">Name</Typography></TableCell>
                                <Hidden xsDown><TableCell><Typography variant="body2" color="primary">Trade Pair</Typography></TableCell></Hidden>
                                <TableCell align="center"><Typography variant="body2" color="primary">Listed</Typography></TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {markets.map((market) => (
                                <TableRow key={market.label}>
                                    <TableCell>
                                        <Box display="flex" justifyContent="flex-start" alignItems="center">
                                            <img src={images[market.icon]} width={26}/>
                                            <Box px={2}>
                                                <Typography variant="body2" color="primary">
                                                    {market.label}
                                                </Typography>
                                            </Box>
                                            {market.link ? <a href={marketLinks.pancakeSwap} style={{ marginBottom: -4 }}><img src={images.foreign} width={16}/></a> : null}
                                        </Box>
                                    </TableCell>
                                    <Hidden xsDown>
                                        <TableCell>
                                            <Typography variant="body2" color="textSecondary">{market.tradePair}</Typography>
                                        </TableCell>
                                    </Hidden>
                                    <TableCell>
                                        <Box display="flex" justifyContent="center" alignItems="center">
                                            <Typography variant="body2" color="textSecondary">
                                                {market.listed
                                                  ? <Box display="flex" maxWidth={140} px={2} py={0.5} justifyContent="center" alignItems="center" borderRadius={30} bgcolor={customTheme.color.purple}>
                                                    <Typography color="error" variant="body2" noWrap>
                                                        {market.listed}
                                                    </Typography>
                                                </Box>
                                                  : 'Will be soon'}
                                            </Typography>
                                        </Box>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </Box>
            </Container>
        </Box>
  )
}

export default Markets
