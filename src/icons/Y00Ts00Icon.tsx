import * as React from 'react';
import { v4 as uuid } from 'uuid';
import { SvgIconProps, useIconSize } from '@phork/phorkit';

export function Y00Ts00Icon({ title, titleId = uuid(), ...initProps }: SvgIconProps): React.ReactElement<SVGElement> {
  const props = useIconSize(initProps);
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 42 45" aria-labelledby={titleId} {...props}>
      {title ? <title id={titleId}>{title}</title> : null}
      <path
        d="M14.541 39.224l4.617-.251c.174-1.766.286-3.37.503-4.957.166-1.208.471-2.396.707-3.595.952-4.847 1.875-9.7 2.864-14.54.587-2.882 1.249-5.75 1.938-8.61.154-.633.584-1.198.862-1.806.275-.598.493-1.223.784-1.813.141-.29.344-.583.595-.785.695-.561 1.369-1.185 2.157-1.583C31.297.406 33.11-.383 35.115.2c1.333.389 2.373 1.302 3.236 2.35 2.253 2.738 3.117 5.978 3.52 9.403.438 3.737-.327 7.357-.95 11-.413 2.409-.645 4.86-1.242 7.222-.59 2.334-1.512 4.59-2.352 6.857-.167.449-.198.739.106 1.112.493.605.935 1.252 1.427 1.922.32-.193.59-.354 1.04-.622-.033.448-.059.724-.076 1-.044.684-.123 1.366-.12 2.05.002.577-.29.85-.92.747-1.19-.198-2.058-.873-2.756-1.801-.201-.268-.396-.54-.638-.87-.148.188-.299.315-.369.476-1.237 2.796-3.379 4.183-6.499 3.922a46.61 46.61 0 01-5.036-.68 4.952 4.952 0 01-3.03-1.892c-.389-.514-.834-.56-1.4-.447-2.052.407-4.092.432-6.131-.144-.372-.106-.929-.05-1.234.16-2.704 1.875-7.327 1.574-8.897-2.164-.56-1.332-1.09-2.677-1.632-4.017-.04-.102-.048-.233-.118-.307-1.172-1.24-1.374-3.056-.522-4.585.1-.181.13-.426.121-.637-.169-4.049.811-7.934 1.734-11.829.454-1.917.837-3.853 1.343-5.756.733-2.745 2.129-5.137 4.15-7.18.267-.27.44-.683.53-1.06.205-.847.756-1.286 1.657-1.397.627-.077 1.224-.358 1.849-.49 1.799-.38 3.598-.584 5.26.462 2.036 1.278 3.429 3.06 4.14 5.33.139.443.16.929.186 1.396.183 3.473.412 6.943-.472 10.374-1.05 4.067-2.016 8.157-3.095 12.218-.643 2.42-1.887 4.575-3.447 6.555l.065.342-.002.003zm20.545-5.186l.278.035c.482-1.676 1.08-3.33 1.417-5.031.524-2.639.818-5.323 1.309-7.968.491-2.65.855-5.286.758-8.001-.08-2.277-.67-4.406-1.526-6.454-.563-1.347-1.403-2.63-2.825-3.348a1.072 1.072 0 00-.607-.114c-.633.102-1.253.288-1.888.372-.752.097-2.079 1.296-2.051 1.96.046 1.167.116 2.335.19 3.503.197 3.102.36 6.207.62 9.304.128 1.513.3 3.05.712 4.505.81 2.86 1.8 5.67 2.719 8.499.295.913.597 1.824.896 2.738h-.002zm-7.803-21.625l-.174-.026c-.152.552-.353 1.095-.447 1.656-.273 1.645-.437 3.308-.763 4.942-.939 4.684-1.985 9.348-2.888 14.037-.361 1.878-.54 3.8-.645 5.71-.085 1.553.497 2.31 2.035 2.628 1.512.313 3.075.4 4.62.555 1.452.145 2.418-.51 3.015-1.801.316-.682.777-1.3 1.09-1.984.122-.263.112-.66.004-.935-.353-.9-.846-1.754-1.162-2.667-.838-2.414-1.688-4.828-2.39-7.28-.69-2.423-1.37-4.869-1.752-7.348-.379-2.466-.379-4.99-.544-7.487h.001zM8.71 9.556c-.085-.025-.172-.05-.258-.077-.366.73-.848 1.43-1.08 2.198a85.19 85.19 0 00-1.584 5.942c-.672 3.004-1.394 6.008-1.826 9.049-.556 3.915-.486 7.802 1.47 11.46.967 1.813 1.645 2.242 3.713 1.783 1.103-.245 1.852-1.531 1.514-2.553-.104-.313-.145-.652-.174-.983a335.31 335.31 0 01-.398-5.065c-.182-2.66-.35-5.322-.513-7.983-.224-3.662-.435-7.324-.659-10.985-.056-.93-.137-1.86-.205-2.787v.001zm4.752 25.003c1.319-1.937 1.88-4.118 2.416-6.295.639-2.59 1.075-5.232 1.796-7.798.71-2.525 1.094-5.051.889-7.658-.138-1.752.143-3.573-.963-5.168-.926-1.337-1.96-2.48-3.789-2.336-.513.04-1 .399-1.513.443-.71.06-.736.434-.697.965.176 2.409.343 4.82.497 7.23.14 2.166.25 4.332.39 6.499.209 3.186.43 6.373.65 9.559.104 1.52.214 3.04.322 4.56l.002-.002z"
        fill="currentColor"
      />
    </svg>
  );
}

Y00Ts00Icon.displayName = 'Y00Ts00Icon';
