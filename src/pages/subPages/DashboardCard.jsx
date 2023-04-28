import React from 'react'
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
// import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const bull = (
    <Box
        component="span"
        sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
    >
        •
    </Box>
);

const card = (
    <React.Fragment>
        <CardContent>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', margin: '8px 0' }}>
                <Typography variant='subtitle2' color="text.secondary" sx={{ fontWeight: 'bold' }} gutterBottom>
                    Inbox
                </Typography>
                <Button variant='text' sx={{ fontWeight: '600', fontSize: '14px', color: '#3751FF' }} >
                    View Details
                </Button>
            </Box>
            <Typography variant="h6" sx={{ fontSize: '12px', position: 'relative', bottom: '21px', fontWeight: '400' }}>
                Group: Quotation
            </Typography>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', width: '96%' }}>
                <Typography sx={{ mb: 1.5, fontWeight: '500' }} color="text.secondary" >
                    Loan Order
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    4:39
                </Typography></Box>
            <hr />
            <Box sx={{ display: 'flex', justifyContent: 'space-between', width: '96%' }}>
                <Typography variant="body2">
                    Customer support id#22234
                </Typography>
                <Typography variant="body2">
                    11:07
                </Typography></Box>
        </CardContent>
    </React.Fragment>
);

export default function DashboardCard() {
    return (
        <Box sx={{ minWidth: 524, height: '153px' }}>
            <Card variant="outlined" sx={{
                borderRadius: '8px'
            }}>{card}</Card>
        </Box>
    );
}
