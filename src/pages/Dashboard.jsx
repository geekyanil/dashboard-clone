import React from 'react'
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import DashboardCard from './subPages/DashboardCard';
import LineChart from './subPages/LineChart';
import RecentActivites from './subPages/RecentActivites';
import BarChart from './subPages/BarChart';
import StatOverview from './subPages/StatOverview';


// const Item = styled(Paper)(({ theme }) => ({
//     backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
//     ...theme.typography.body2,
//     padding: theme.spacing(1),
//     textAlign: 'center',
//     color: theme.palette.text.secondary,
// }));

const Dashboard = () => {
    return (
        <div id='dashboard'>
            <Box sx={{ width: '100%' }}>
                <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} columnGap={12}>
                    <Grid item xs={4}>
                        <DashboardCard />
                    </Grid>
                    <Grid item xs={6} >
                        <LineChart />
                    </Grid>
                    <Grid item xs={4} sx={{ position: 'relative', bottom: '150px' }}>
                        <RecentActivites />
                    </Grid>
                </Grid>
                <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} columnGap={12} sx={{ position: 'relative', bottom: '100px' }}>
                    <Grid item xs={8} >
                        <BarChart />
                    </Grid>
                    <Grid item xs={3}>
                        <StatOverview />
                    </Grid>
                </Grid>
            </Box>


        </div>
    )
}

export default Dashboard