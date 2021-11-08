import { kratosApiPath } from '$lib/variables';

import type {
    SelfServiceRegistrationFlow,
    UiNodeAttributes,
    UiNodeInputAttributes,
} from '@ory/kratos-client';

export type {
    SelfServiceRegistrationFlow,
    UiContainer,
    UiNode,
    UiNodeInputAttributes,
} from '@ory/kratos-client';

export const isUiNodeInputAttributes = (
    attributes: UiNodeAttributes
): attributes is UiNodeInputAttributes => attributes.node_type === 'input';

export const startRegistrationFlow = async (fetch: typeof window.fetch = window.fetch): Promise<SelfServiceRegistrationFlow> => {
    const result = await fetch(`${kratosApiPath}/self-service/registration/browser`, {
        method: 'GET',
        credentials: 'include',
        headers: {
            Accept: 'application/json',
        },
    });
    return result.json();
};

export const submitRegistrationFlow = async (
    flow: SelfServiceRegistrationFlow,
    data: { [key: string]: string }
): Promise<void> => {
    const result = await window.fetch(flow.ui.action, {
        method: flow.ui.method,
        credentials: 'include',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    });

    if (!result.ok) {
        throw new Error(await result.text());
    }
};
