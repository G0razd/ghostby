import React from 'react'
import { makeStyles } from "@material-ui/core/styles"
import PropTypes from "prop-types";
import { Link } from "gatsby-theme-material-ui";
import { Tags } from "@tryghost/helpers-gatsby";
import { readingTime as readingTimeHelper } from "@tryghost/helpers";
import { Card, CardActions, CardContent, Typography, CardHeader, CardMedia, Button } from '@material-ui/core/'
const useStyles = makeStyles((theme) => {
    return {

        title: {
            fontSize: 18,
        },
    }
})

const PostCard = ({ post }) => {
    const url = `/${post.slug}/`;
    const readingTime = readingTimeHelper(post);
    const classes = useStyles();
    return (
        <Card className={classes.root}>
            <CardHeader title="Novinky" />
            <CardMedia
                object-fit
                component="img"
                height="100"
                
                image= ""
            />
            <CardContent>
                <Typography gutterBottom variant="h4" component="h4">
                    {post.title}
                </Typography>
                <hr />
                <Typography paragraph>{post.excerpt}</Typography>
            </CardContent>
            <CardActions>
                <hr />
                <Button href={url} size="small">Zjistit více</Button>
            </CardActions>
        </Card>
    );
};
PostCard.propTypes = {
    post: PropTypes.shape({
        slug: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        feature_image: PropTypes.string,
        featured: PropTypes.bool,
        tags: PropTypes.arrayOf(
            PropTypes.shape({
                name: PropTypes.string,
            })
        ),
        excerpt: PropTypes.string.isRequired,
        primary_author: PropTypes.shape({
            name: PropTypes.string.isRequired,
            profile_image: PropTypes.string,
        }).isRequired,
    }).isRequired,
}

export default PostCard
