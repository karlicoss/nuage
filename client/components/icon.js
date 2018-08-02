import React from 'react';
import './icon.scss';

import img_folder from "../assets/img/folder.svg";
import img_file from "../assets/img/file.svg";
import img_loader from "../assets/img/loader.svg";
import img_save from "../assets/img/save.svg";
import img_power from "../assets/img/power.svg";
import img_edit from "../assets/img/edit.svg";
import img_delete from "../assets/img/delete.svg";
import img_bucket from "../assets/img/bucket.svg";
import img_link from "../assets/img/link.svg";
import img_loading from "../assets/img/loader.svg";
import img_play from "../assets/img/play.svg";
import img_pause from "../assets/img/pause.svg";
import img_error from "../assets/img/error.svg";
import img_loading_white from "../assets/img/loader_white.svg";
import img_download_white from "../assets/img/download_white.svg";
import img_todo_white from '../assets/img/todo_white.svg';
import img_calendar_white from '../assets/img/calendar_white.svg';
import img_calendar from '../assets/img/calendar.svg';
import img_alarm from '../assets/img/alarm.svg';
import img_arrow_right from '../assets/img/arrow_right.svg';
import img_arrow_right_white from '../assets/img/arrow_right_white.svg';
import img_arrow_left_white from '../assets/img/arrow_left_white.svg';
import img_more from '../assets/img/more.svg';
import img_close from '../assets/img/close.svg';
import img_close_dark from '../assets/img/close_dark.svg';
import img_schedule from '../assets/img/schedule.svg';
import img_deadline from '../assets/img/deadline.svg';
import img_arrow_down from '../assets/img/arrow-down.svg';
import img_arrow_up_double from '../assets/img/arrow-up-double.svg';
import img_arrow_down_double from '../assets/img/arrow-down-double.svg';
import img_search from '../assets/img/search.svg';
import img_search_dark from '../assets/img/search_dark.svg';
import img_grid from '../assets/img/grid.svg';
import img_list from '../assets/img/list.svg';
import img_sort from '../assets/img/sort.svg';
import img_check from '../assets/img/check.svg';
import img_info from '../assets/img/info.svg';
import img_fullscreen from '../assets/img/fullscreen.svg';
import img_camera from '../assets/img/camera.svg';
import img_location from '../assets/img/location.svg';

export const Icon = (props) => {
    if(props.name === null) return null;
    let img;
    if(props.name === 'directory'){
        img = img_folder;
    }else if(props.name === 'file'){
        img = img_file;
    }else if(props.name === 'loader'){
        img = img_loader;
    }else if(props.name === 'save'){
        img = img_save;
    }else if(props.name === 'power'){
        img = img_power;
    }else if(props.name === 'edit'){
        img = img_edit;
    }else if(props.name === 'delete'){
        img = img_delete;
    }else if(props.name === 'bucket'){
        img = img_bucket;
    }else if(props.name === 'link'){
        img = img_link;
    }else if(props.name === 'loading'){
        img = img_loader;
    }else if(props.name === 'download_white'){
        img = img_download_white;
    }else if(props.name === 'play'){
        img = img_play;
    }else if(props.name === 'pause'){
        img = img_pause;
    }else if(props.name === 'error'){
        img = img_error;
    }else if(props.name === 'loading_white'){
        img = img_loading_white;
    }else if(props.name === 'calendar_white'){
        img = img_calendar_white;
    }else if(props.name === 'schedule'){
        img = img_calendar;
    }else if(props.name === 'deadline'){
        img = img_alarm;
    }else if(props.name === 'todo_white'){
        img = img_todo_white;
    }else if(props.name === 'arrow_right'){
        img = img_arrow_right;
    }else if(props.name === 'arrow_right_white'){
        img = img_arrow_right_white;
    }else if(props.name === 'arrow_left_white'){
        img = img_arrow_left_white;
    }else if(props.name === 'more'){
        img = img_more;
    }else if(props.name === 'close'){
        img = img_close;
    }else if(props.name === 'close_dark'){
        img = img_close_dark;
    }else if(props.name === 'arrow_up_double'){
        img = img_arrow_up_double;
    }else if(props.name === 'arrow_down_double'){
        img = img_arrow_down_double;
    }else if(props.name === 'arrow_down'){
        img = img_arrow_down;
    }else if(props.name === 'search'){
        img = img_search;
    }else if(props.name === 'search_dark'){
        img = img_search_dark;
    }else if(props.name === 'grid'){
        img = img_grid;
    }else if(props.name === 'list'){
        img = img_list;
    }else if(props.name === 'sort'){
        img = img_sort;
    }else if(props.name === 'check'){
        img = img_check;
    }else if(props.name === 'info'){
        img = img_info;
    }else if(props.name === 'fullscreen'){
        img = img_fullscreen;
    }else if(props.name === 'camera'){
        img = img_camera;
    }else if(props.name === 'location'){
        img = img_location;
    }else{
        throw('unknown icon');
    }

    return (
        <img className="component_icon"
             style={props.style}
             onClick={props.onClick}
             src={img}
             alt={props.name}/>
    );
};
