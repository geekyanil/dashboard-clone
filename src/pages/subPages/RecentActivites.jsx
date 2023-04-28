import React from 'react'
import { pink } from '@mui/material/colors';
import Checkbox from '@mui/material/Checkbox';
import { Box, Button, CardContent, Typography } from '@mui/material';
import Card from '@mui/material/Card';


const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

const bull = (
    <Box
        component="span"
        sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
    >
        •
    </Box>
);

const card = (

    <>

        <CardContent>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', margin: '8px 0' }}>
                <Typography variant='subtitle2' color="text.secondary" sx={{ fontWeight: 'bold', padding: '6px 0' }} gutterBottom>
                    Recent Activities
                </Typography>
                <Button variant='subtitle2' size='small' sx={{ fontWeight: '600', fontSize: '14px', padding: '6px 0', color: '#3751FF' }} >
                    View All
                </Button>
            </Box>

            <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <Checkbox {...label} defaultChecked sx={{
                        color: '#3751FF',
                        '&.Mui-checked': {
                            color: ' #3751FF',
                        },
                    }} />
                    <Typography color="text.secondary" variant='body2'>
                        Confirm order update
                    </Typography>
                </Box>
                <Button variant='contained' size="small" sx={{ backgroundColor: '#FEC400', width: '50px', height: '24px', padding: '5px', borderRadius: '8px' }} >
                    Urgent
                </Button>
            </Box>
            <hr />
            <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <Checkbox {...label} defaultChecked sx={{
                        color: '#FF0303',
                        '&.Mui-checked': {
                            color: '#FF0303',
                        },
                    }} />
                    <Typography color="text.secondary" variant='body2'>
                        Finish shipping update
                    </Typography>
                </Box>
                <Button variant='contained' size="small" sx={{ backgroundColor: '#FEC400', width: '50px', height: '24px', padding: '5px', borderRadius: '8px' }} >
                    Urgent
                </Button>
            </Box>
            <hr />
            <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <Checkbox {...label} defaultChecked sx={{
                        color: '#C5C7CD',
                        '&.Mui-checked': {
                            color: '#C5C7CD',
                        },
                    }} />
                    <Typography color="text.secondary" variant='body2'>
                        Create new order
                    </Typography>
                </Box>
                <Button variant='contained' size="small" sx={{ backgroundColor: '#29CC97', borderRadius: '8px', width: '54px', height: '24px' }}>
                    New
                </Button>
            </Box>
            <hr />
            <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <Checkbox {...label} defaultChecked sx={{
                        color: '#3751FF',
                        '&.Mui-checked': {
                            color: ' #3751FF',
                        },
                    }} />
                    <Typography color="text.secondary" variant='body2'>
                        Update payment report
                    </Typography>
                </Box>
                <Button variant='outlined' sx={{ width: '76px', height: '14px', background: '#F0F1F7', borderRadius: '8px', padding: '11px' }}  >
                    Default
                </Button>
            </Box>
        </CardContent >
    </ >
)


export default function RecentActivites() {
    return (
        <Box sx={{ width: 524, height: '316px', position: 'relative', bottom: '10px', padding: '15px 0px', marginTop: '10px', }}>
            <Card variant="outlined" sx={{ borderRadius: '8px' }}>{card}</Card>
        </Box>
    );
}