
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

import '../ActivityStyle.css'

import { Activity } from '../../../app/models/activity';
import { Button } from '@mui/material';
interface Props {
    activities: Activity[];
}

export default function ActivityList(activities: Props) {
    return (
        <Card className="card-container"> 
          {activities.activities.map((activity) => (
            <CardContent key={activity.id}>
              <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                {activity.name}
              </Typography>
              <Typography variant="h5" component="div">
                {activity.name}
              </Typography>
              <Typography sx={{ mb: 1.5 }} color="text.secondary">
                {activity.description}
              </Typography>
              <div>
                {activity.venue}
              </div>
              <div className='button-container'>
                <Button>
                    View
                </Button>
              </div>
              
            </CardContent>
          ))}
        </Card>
      );
}