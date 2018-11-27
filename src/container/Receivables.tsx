/**
 * Copyright: Copyright (C) 2018 sitb.software,All Rights Reserved
 * author: yangyao(873241789@qq.com)
 * date: 2018/11/27
 */
import * as React from 'react';
import Grid from '@material-ui/core/Grid';
import Store from '@material-ui/icons/Store';
import { autoBind } from '@sitb/wbs/autoBind';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import FormControl from '@material-ui/core/FormControl';
import Button from '../components/Button';
import TextField from '@material-ui/core/TextField';
import { NumberFormatCustom } from '../components/Input/NumberFormatCustom';
import { lang } from '../constants/zh-cn';

const styles = theme => ({
  header: {
    paddingTop: 40,
    paddingBottom: 20
  },
  headerLogo: {
    fontSize: 70
  },
  headerMerchantName: {
    merchantTo: -10
  },
  headerMerchantNo: {
    fontSize: 12
  },
  content: {
    marginTop: 40,
    marginLeft: 12,
    marginRight: 12
  },
  contentSubmit: {
    marginTop: 30
  }
});

@autoBind
class Container extends React.Component<any, any> {

  constructor(props, content) {
    super(props, content);
    this.state = {
      amount: ''
    };
  }

  /**
   * 保存金额
   * @param event
   * @param key
   */
  handleChange(event, key) {
    this.setState({[key]: event.target.value});
  };

  render() {
    const {classes} = this.props;
    return (
      <Grid container
            justify="center"
      >
        <Grid container
              justify="center"
              direction="column"
              alignItems="center"
              className={classes.header}
        >
          <Store className={classes.headerLogo}/>
          <Typography variant="subtitle2"
                      className={classes.headerMerchantName}
          >
            {'yangyao'}
          </Typography>
          <Typography variant="body2"
                      className={classes.headerMerchantNo}
                      gutterBottom
          >
            {"6001023010222"}
          </Typography>
        </Grid>
        <Grid className={classes.content}
              container
        >
          <FormControl fullWidth>
            <TextField className={classes.formControl}
                       label={lang.receivablesAmount}
                       value={this.state.amount}
                       onChange={e => this.handleChange(e, 'amount')}
                       id="adornment-amount"
                       InputProps={{
                         inputComponent: NumberFormatCustom
                       }}
            />
            <Button children={lang.confirm}
                    className={classes.contentSubmit}
            />
          </FormControl>
        </Grid>
      </Grid>
    )
  }
}

export const Receivables = withStyles(styles)(Container as any);
