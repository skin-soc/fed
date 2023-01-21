import React from 'react';
import ImmutablePropTypes from 'react-immutable-proptypes';
import { defineMessages, injectIntl, FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Column from 'mastodon/components/column';
import LinkFooter from 'mastodon/features/ui/components/link_footer';
import { Helmet } from 'react-helmet';
import { fetchServer, fetchExtendedDescription, fetchDomainBlocks } from 'mastodon/actions/server';
import Account from 'mastodon/containers/account_container';
import Skeleton from 'mastodon/components/skeleton';
import Icon from 'mastodon/components/icon';
import classNames from 'classnames';
import Image from 'mastodon/components/image';

const Logo = () => (
  <Image blurhash={server.getIn(['thumbnail', 'blurhash'])} src={server.getIn(['thumbnail', 'url'])} srcSet={server.getIn(['thumbnail', 'versions'])?.map((value, key) => `${value} ${key.replace('@', '')}`).join(', ')} className='about__header__hero' />
);

export default Logo;
