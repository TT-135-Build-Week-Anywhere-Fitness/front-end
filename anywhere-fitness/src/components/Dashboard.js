import React from 'react';
import { connect } from 'react-redux';
import { getClasses, setEditing } from '../actions/index';
import ClientSearch from './ClientSearch';
import SingleClass from './SingleClass';
import {StyledDashboard} from '../styledComponents/StyledDashboard'


function Dashboard (props){

    useEffect(() => {
        props.getClasses()
    }, [])



    return(
        <div>
            <ClientSearch />
                <h3>Available Classes</h3>
                {props.isFetching ? <h3>Data is loading...</h3> :
                    <div>
                        {props.classes.map(inclass=>{
                            return(<SingleClass key={inclass.id} inclass={inclass}/>)
                        })
                        }
                    </div>
                }

        </div>
    )
}


const mapStateToProps = state =>{
    console.log(state.classes)
    return{
        classes: state.classes,
        error: state.error,
        isFetching: state.isFetching
    }
}
export default connect(mapStateToProps, { getClasses, setEditing })(Dashboard)