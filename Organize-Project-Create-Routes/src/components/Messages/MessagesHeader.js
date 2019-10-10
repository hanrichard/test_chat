import React from 'react';
import { Header, Segment, Input, Icon } from 'semantic-ui-react';

class MessagesHeader extends React.Component {
	render() {
		const { channelName, channelUsers, handleSearch, searchTerm, searchLoading } = this.props;

		return (
			<Segment clearing>
				{/* Channel Title */}
				<Header fluid="true" as="h2" floated="left" style={{ marginBottom: 0 }}>
					<span>
						{channelName}
						<Icon name={'star outline'} color="black" />
					</span>
					<Header.Subheader>{channelUsers}</Header.Subheader>
				</Header>

				{/* Channel Search Input */}
				<Header floated="right">
					<Input
						size="mini"
						icon="search"
						name="searchTerm"
						placeholder="Search Messages"
						onChange={handleSearch}
						value={searchTerm}
						loading={searchLoading}
					/>
				</Header>
			</Segment>
		);
	}
}

export default MessagesHeader;
