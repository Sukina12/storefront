import React,{useEffect} from 'react';
import { connect } from 'react-redux';
import { activeCategory } from '../../store/Active';
import Typography from '@material-ui/core/Typography';
import Card from  '@material-ui/core/Card' ;
// import CardMedia from  '@material-ui/core/CardMedia' ;
import CardActionArea from '@material-ui/core/CardActionArea';
import {makeStyles} from '@material-ui/core/styles'
import {getData2} from '../../store/actions/action'


const useStyles = makeStyles({
  root: {
      maxWidth: 300,
     padding:'1rem',
     margin:'1rem',
     border:'solid',
     display:'inline-block',
     textAlign:'center'
  },
});
export function Categories(props) {
  useEffect (() => {
    props.getData2();
  },[props]);
  const classes = useStyles();
  return (
    <>
      <h3>
        {' '}
        Browse Our Categories :
      </h3>
      {props.categories.map(category => {
        return (
          <Card stayle={{ height: '100rem' }} className={classes.root}>
                        <CardActionArea>
                            {/* <CardMedia
                                component='img'
                                alt={props.alt}
                                height='250'
                                width='250'
                                src={category.url}
                                title={category.displayName}
                                onClick={() => props.activeCategory(category.name)}
                            /> */}
                            <Typography gutterBottom variant='h6' component='h2' onClick={() => props.activeCategory(category.name)}>
                                {category.name}
                            </Typography>
                        </CardActionArea>
                    </Card>
        );
      })}

    </>
  );
}

const mapStateToProps = state => {
  return {
    categories:state.categories.categories,
    active:state.categories.active,
  };
};

const mapDispatchToProps ={activeCategory,getData2};

export default connect (mapStateToProps, mapDispatchToProps)(Categories);
