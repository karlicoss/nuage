import React from 'react';
import PropTypes from 'prop-types';
import Ripples from 'react-ripples';

import { Card, NgIf, Icon, EventEmitter, Dropdown, DropdownButton, DropdownList, DropdownItem, Container } from '../../components/';
import { pathBuilder, debounce } from '../../helpers/';
import "./submenu.scss";

@EventEmitter
export class Submenu extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            search_enabled: "ServiceWorker" in window ? true : false,
            search_input_visible: false,
            search_keyword: ""
        };
        this.onSearchChange_Backpressure = debounce(this.onSearchChange, 400);
    }

    componentDidMount(){
        window.addEventListener('keydown', this._onEscapeKeyPress);
    }
    componentWillUnmount(){
        window.removeEventListener('keydown', this._onEscapeKeyPress);
    }

    onNew(type){
        this.props.emit("new::"+type);
    }

    onViewChange(e){
        requestAnimationFrame(() => this.props.onViewUpdate());
    }

    onSortChange(e){
        this.props.onSortUpdate(e);
    }

    onSearchChange(search, e){
        this.props.onSearch(search.trim());
    }

    onSearchToggle(){
        if(new Date () - this.search_last_toggle < 200){
            // avoid bluring event cancelling out the toogle
            return;
        }
        this.refs.$input.focus();
        this.setState({search_input_visible: !this.state.search_input_visible}, () => {
            if(this.state.search_input_visible == false){
                this.props.onSearch(null);
                this.setState({search_keyword: ""});
            }
        });
    }

    closeIfEmpty(){
        if(this.state.search_keyword.trim().length > 0) return;
        this.search_last_toggle = new Date();
        this.setState({
            search_input_visible: false,
            search_keyword: ""
        });
        this.props.onSearch(null);
    }

    onSearchKeypress(s, backpressure = true, e){
        if(backpressure){
            this.onSearchChange_Backpressure(s);
        }else{
            this.onSearchChange(s);
        }
        this.setState({search_keyword: s});

        if(e && e.preventDefault){
            e.preventDefault();
        }
    }

    render(){
        return (
            <div className="component_submenu">
              <Container>
                <div className={"menubar no-select "+(this.state.search_input_visible ? "search_focus" : "")}>
                  <NgIf cond={this.props.accessRight.can_create_file !== false} onClick={this.onNew.bind(this, 'file')} type="inline">
                    New File
                  </NgIf>
                  <NgIf cond={this.props.accessRight.can_create_directory !== false} onClick={this.onNew.bind(this, 'directory')} type="inline">
                    New Directory
                  </NgIf>
                  <Dropdown className="view sort" onChange={this.onSortChange.bind(this)}>
                    <DropdownButton>
                      <Icon name="sort"/>
                    </DropdownButton>
                    <DropdownList>
                      <DropdownItem name="type" icon={this.props.sort === "type" ? "check" : null}> Sort By Type </DropdownItem>
                      <DropdownItem name="date" icon={this.props.sort === "date" ? "check" : null}> Sort By Date </DropdownItem>
                      <DropdownItem name="name" icon={this.props.sort === "name" ? "check" : null}> Sort By Name </DropdownItem>
                    </DropdownList>
                  </Dropdown>
                  <div className="view list-grid" onClick={this.onViewChange.bind(this)}><Icon name={this.props.view === "grid" ? "list" : "grid"}/></div>
                  <form onSubmit={(e) => this.onSearchKeypress(this.state.search_keyword, false, e)} className="view" style={{display: this.state.search_enabled === true ? "block" : "none"}}>
                    <label className="view search" onClick={this.onSearchToggle.bind(this, null)}>
                      <NgIf cond={this.state.search_input_visible !== true}>
                        <Icon name="search_dark"/>
                      </NgIf>
                      <NgIf cond={this.state.search_input_visible === true}>
                        <Icon name="close_dark"/>
                      </NgIf>
                    </label>
                    <NgIf cond={this.state.search_input_visible !== null} type="inline">
                      <input ref="$input" onBlur={this.closeIfEmpty.bind(this, false)} style={{"width": this.state.search_input_visible ? "180px" : "0px"}} value={this.state.search_keyword} onChange={(e) => this.onSearchKeypress(e.target.value, true)} type="text" id="search" placeholder="search" name="search" autoComplete="off" />
                    </NgIf>
                  </form>
                </div>
              </Container>
            </div>
        );
    };
}

Submenu.PropTypes = {
    accessRight: PropTypes.obj,
    onCreate: PropTypes.func.isRequired,
    onSortUpdate: PropTypes.func.isRequired,
    sort: PropTypes.string.isRequired
};
