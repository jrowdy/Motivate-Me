import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
});

export default ({ video, onVideoSelect }) => {
  const classes = useStyles();

  return (
    <Card className={classes.root} style={{ display: "flex", marginBottom: "15px", alignItems: "center", cursor: "pointer" }} onClick={() => onVideoSelect(video)}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="thumbnail"
          src={video.snippet.thumbnails.medium.url}
        />
        <CardContent>
          <Typography gutterBottom variant="body2" component="h4">
            <b>{video.snippet.title}</b>
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
