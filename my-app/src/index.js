import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import 'semantic-ui-css/semantic.min.css';
import { Icon, Image, Menu, Grid, Button } from 'semantic-ui-react';
import Search from 'semantic-ui-react/dist/commonjs/modules/Search';

class MenuTop extends React.Component {
  render() {
    return (
        <Menu borderless className="topmenu">
          <Menu.Item>About</Menu.Item>
          <Menu.Item>Store</Menu.Item>
          <Menu.Item position="right">Gmail</Menu.Item>
          <Menu.Item>Images</Menu.Item>
          <Menu.Item><Icon name='grid layout'/></Menu.Item>
        </Menu>
    )
  }
}

class GoogleImage extends React.Component {
  render() {
    return (
        <Image centered className="middleimage"
               src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"></Image>
    )
  }
}

class SearchBar extends React.Component {
  render() {
    return (
        <Grid container columns={2} centered>
          <Grid.Row centered>
            <Search centered fluid input={{ icon: 'search', iconPosition: 'left' }} placeholder=' '
                    size='large'><input/></Search>
          </Grid.Row>
          <Grid.Row verticalAlign='middle' centered>
              <Button primary size='small' className="grayButton">Google Search</Button>
              <Button primary size='small' className="grayButton">I'm Feeling Lucky</Button>
          </Grid.Row>
        </Grid>
    )
  }
}

class FooterMenu extends React.Component {
  render() {
    return (
        <Menu borderless className="footer">
          <Menu.Item className="grayColor">Advertising</Menu.Item>
          <Menu.Item className="grayColor">Business</Menu.Item>
          <Menu.Item className="grayColor">How Search Works</Menu.Item>
          <Menu.Item position='right' className="grayColor">Privacy</Menu.Item>
          <Menu.Item className="grayColor">Terms</Menu.Item>
          <Menu.Item className="grayColor">Settings</Menu.Item>
        </Menu>
    )
  }
}

class GoogleCopy extends React.Component {

  render() {
    return (
        <div>
          <MenuTop/>
          <GoogleImage/>
          <SearchBar/>
          <FooterMenu/>
        </div>
    );
  }
}

ReactDOM.render(
    <GoogleCopy/>
    , document.getElementById('root'));