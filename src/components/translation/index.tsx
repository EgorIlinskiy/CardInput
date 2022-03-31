import React from 'react';
import intl, {IntlProvider, FormattedMessage} from 'react-intl'

const messagesInFrench = {
    messages: 'hola'
}

function Translation() {
    return (
        <IntlProvider messages={messagesInFrench} locale="fr" defaultLocale="en">
            <p>
                <FormattedMessage
                    id="myMessage"
                />
            </p>
        </IntlProvider>
    )
}
export default Translation;