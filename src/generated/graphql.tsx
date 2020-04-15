import gql from 'graphql-tag';
import * as React from 'react';
import * as ApolloReactCommon from '@apollo/react-common';
import * as ApolloReactComponents from '@apollo/react-components';
import * as ApolloReactHoc from '@apollo/react-hoc';
import * as ApolloReactHooks from '@apollo/react-hooks';
export type Maybe<T> = T | null;
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  URI: any;
  DateTime: any;
  HTML: any;
  GitObjectID: any;
  GitTimestamp: any;
  GitSSHRemote: any;
  Date: any;
  PreciseDateTime: any;
  X509Certificate: any;
};

export type AcceptEnterpriseAdministratorInvitationInput = {
  invitationId: Scalars['ID'];
  clientMutationId?: Maybe<Scalars['String']>;
};

export type AcceptEnterpriseAdministratorInvitationPayload = {
   __typename?: 'AcceptEnterpriseAdministratorInvitationPayload';
  clientMutationId?: Maybe<Scalars['String']>;
  invitation?: Maybe<EnterpriseAdministratorInvitation>;
  message?: Maybe<Scalars['String']>;
};

export type AcceptTopicSuggestionInput = {
  repositoryId: Scalars['ID'];
  name: Scalars['String'];
  clientMutationId?: Maybe<Scalars['String']>;
};

export type AcceptTopicSuggestionPayload = {
   __typename?: 'AcceptTopicSuggestionPayload';
  clientMutationId?: Maybe<Scalars['String']>;
  topic?: Maybe<Topic>;
};

export enum ActionExecutionCapabilitySetting {
  Disabled = 'DISABLED',
  AllActions = 'ALL_ACTIONS',
  LocalActionsOnly = 'LOCAL_ACTIONS_ONLY',
  NoPolicy = 'NO_POLICY'
}

export type Actor = {
  avatarUrl: Scalars['URI'];
  login: Scalars['String'];
  resourcePath: Scalars['URI'];
  url: Scalars['URI'];
};


export type ActorAvatarUrlArgs = {
  size?: Maybe<Scalars['Int']>;
};

export type ActorLocation = {
   __typename?: 'ActorLocation';
  city?: Maybe<Scalars['String']>;
  country?: Maybe<Scalars['String']>;
  countryCode?: Maybe<Scalars['String']>;
  region?: Maybe<Scalars['String']>;
  regionCode?: Maybe<Scalars['String']>;
};

export type AddAssigneesToAssignableInput = {
  assignableId: Scalars['ID'];
  assigneeIds: Array<Scalars['ID']>;
  clientMutationId?: Maybe<Scalars['String']>;
};

export type AddAssigneesToAssignablePayload = {
   __typename?: 'AddAssigneesToAssignablePayload';
  assignable?: Maybe<Assignable>;
  clientMutationId?: Maybe<Scalars['String']>;
};

export type AddCommentInput = {
  subjectId: Scalars['ID'];
  body: Scalars['String'];
  clientMutationId?: Maybe<Scalars['String']>;
};

export type AddCommentPayload = {
   __typename?: 'AddCommentPayload';
  clientMutationId?: Maybe<Scalars['String']>;
  commentEdge?: Maybe<IssueCommentEdge>;
  subject?: Maybe<Node>;
  timelineEdge?: Maybe<IssueTimelineItemEdge>;
};

export type AddedToProjectEvent = Node & {
   __typename?: 'AddedToProjectEvent';
  actor?: Maybe<Actor>;
  createdAt: Scalars['DateTime'];
  databaseId?: Maybe<Scalars['Int']>;
  id: Scalars['ID'];
};

export type AddLabelsToLabelableInput = {
  labelableId: Scalars['ID'];
  labelIds: Array<Scalars['ID']>;
  clientMutationId?: Maybe<Scalars['String']>;
};

export type AddLabelsToLabelablePayload = {
   __typename?: 'AddLabelsToLabelablePayload';
  clientMutationId?: Maybe<Scalars['String']>;
  labelable?: Maybe<Labelable>;
};

export type AddProjectCardInput = {
  projectColumnId: Scalars['ID'];
  contentId?: Maybe<Scalars['ID']>;
  note?: Maybe<Scalars['String']>;
  clientMutationId?: Maybe<Scalars['String']>;
};

export type AddProjectCardPayload = {
   __typename?: 'AddProjectCardPayload';
  cardEdge?: Maybe<ProjectCardEdge>;
  clientMutationId?: Maybe<Scalars['String']>;
  projectColumn?: Maybe<ProjectColumn>;
};

export type AddProjectColumnInput = {
  projectId: Scalars['ID'];
  name: Scalars['String'];
  clientMutationId?: Maybe<Scalars['String']>;
};

export type AddProjectColumnPayload = {
   __typename?: 'AddProjectColumnPayload';
  clientMutationId?: Maybe<Scalars['String']>;
  columnEdge?: Maybe<ProjectColumnEdge>;
  project?: Maybe<Project>;
};

export type AddPullRequestReviewCommentInput = {
  pullRequestId?: Maybe<Scalars['ID']>;
  pullRequestReviewId?: Maybe<Scalars['ID']>;
  commitOID?: Maybe<Scalars['GitObjectID']>;
  body: Scalars['String'];
  path?: Maybe<Scalars['String']>;
  position?: Maybe<Scalars['Int']>;
  inReplyTo?: Maybe<Scalars['ID']>;
  clientMutationId?: Maybe<Scalars['String']>;
};

export type AddPullRequestReviewCommentPayload = {
   __typename?: 'AddPullRequestReviewCommentPayload';
  clientMutationId?: Maybe<Scalars['String']>;
  comment?: Maybe<PullRequestReviewComment>;
  commentEdge?: Maybe<PullRequestReviewCommentEdge>;
};

export type AddPullRequestReviewInput = {
  pullRequestId: Scalars['ID'];
  commitOID?: Maybe<Scalars['GitObjectID']>;
  body?: Maybe<Scalars['String']>;
  event?: Maybe<PullRequestReviewEvent>;
  comments?: Maybe<Array<Maybe<DraftPullRequestReviewComment>>>;
  threads?: Maybe<Array<Maybe<DraftPullRequestReviewThread>>>;
  clientMutationId?: Maybe<Scalars['String']>;
};

export type AddPullRequestReviewPayload = {
   __typename?: 'AddPullRequestReviewPayload';
  clientMutationId?: Maybe<Scalars['String']>;
  pullRequestReview?: Maybe<PullRequestReview>;
  reviewEdge?: Maybe<PullRequestReviewEdge>;
};

export type AddPullRequestReviewThreadInput = {
  path: Scalars['String'];
  body: Scalars['String'];
  pullRequestReviewId: Scalars['ID'];
  line: Scalars['Int'];
  side?: Maybe<DiffSide>;
  startLine?: Maybe<Scalars['Int']>;
  startSide?: Maybe<DiffSide>;
  clientMutationId?: Maybe<Scalars['String']>;
};

export type AddPullRequestReviewThreadPayload = {
   __typename?: 'AddPullRequestReviewThreadPayload';
  clientMutationId?: Maybe<Scalars['String']>;
  thread?: Maybe<PullRequestReviewThread>;
};

export type AddReactionInput = {
  subjectId: Scalars['ID'];
  content: ReactionContent;
  clientMutationId?: Maybe<Scalars['String']>;
};

export type AddReactionPayload = {
   __typename?: 'AddReactionPayload';
  clientMutationId?: Maybe<Scalars['String']>;
  reaction?: Maybe<Reaction>;
  subject?: Maybe<Reactable>;
};

export type AddStarInput = {
  starrableId: Scalars['ID'];
  clientMutationId?: Maybe<Scalars['String']>;
};

export type AddStarPayload = {
   __typename?: 'AddStarPayload';
  clientMutationId?: Maybe<Scalars['String']>;
  starrable?: Maybe<Starrable>;
};

export type App = Node & {
   __typename?: 'App';
  createdAt: Scalars['DateTime'];
  databaseId?: Maybe<Scalars['Int']>;
  description?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  logoBackgroundColor: Scalars['String'];
  logoUrl: Scalars['URI'];
  name: Scalars['String'];
  slug: Scalars['String'];
  updatedAt: Scalars['DateTime'];
  url: Scalars['URI'];
};


export type AppLogoUrlArgs = {
  size?: Maybe<Scalars['Int']>;
};

export type ArchiveRepositoryInput = {
  repositoryId: Scalars['ID'];
  clientMutationId?: Maybe<Scalars['String']>;
};

export type ArchiveRepositoryPayload = {
   __typename?: 'ArchiveRepositoryPayload';
  clientMutationId?: Maybe<Scalars['String']>;
  repository?: Maybe<Repository>;
};

export type Assignable = {
  assignees: UserConnection;
};


export type AssignableAssigneesArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};

export type AssignedEvent = Node & {
   __typename?: 'AssignedEvent';
  actor?: Maybe<Actor>;
  assignable: Assignable;
  assignee?: Maybe<Assignee>;
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  /** @deprecated Assignees can now be mannequins. Use the `assignee` field instead. Removal on 2020-01-01 UTC. */
  user?: Maybe<User>;
};

export type Assignee = Bot | Mannequin | Organization | User;

export type AuditEntry = {
  action: Scalars['String'];
  actor?: Maybe<AuditEntryActor>;
  actorIp?: Maybe<Scalars['String']>;
  actorLocation?: Maybe<ActorLocation>;
  actorLogin?: Maybe<Scalars['String']>;
  actorResourcePath?: Maybe<Scalars['URI']>;
  actorUrl?: Maybe<Scalars['URI']>;
  createdAt: Scalars['PreciseDateTime'];
  operationType?: Maybe<OperationType>;
  user?: Maybe<User>;
  userLogin?: Maybe<Scalars['String']>;
  userResourcePath?: Maybe<Scalars['URI']>;
  userUrl?: Maybe<Scalars['URI']>;
};

export type AuditEntryActor = Bot | Organization | User;

export type AuditLogOrder = {
  field?: Maybe<AuditLogOrderField>;
  direction?: Maybe<OrderDirection>;
};

export enum AuditLogOrderField {
  CreatedAt = 'CREATED_AT'
}

export type BaseRefChangedEvent = Node & {
   __typename?: 'BaseRefChangedEvent';
  actor?: Maybe<Actor>;
  createdAt: Scalars['DateTime'];
  databaseId?: Maybe<Scalars['Int']>;
  id: Scalars['ID'];
};

export type BaseRefForcePushedEvent = Node & {
   __typename?: 'BaseRefForcePushedEvent';
  actor?: Maybe<Actor>;
  afterCommit?: Maybe<Commit>;
  beforeCommit?: Maybe<Commit>;
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  pullRequest: PullRequest;
  ref?: Maybe<Ref>;
};

export type Blame = {
   __typename?: 'Blame';
  ranges: Array<BlameRange>;
};

export type BlameRange = {
   __typename?: 'BlameRange';
  age: Scalars['Int'];
  commit: Commit;
  endingLine: Scalars['Int'];
  startingLine: Scalars['Int'];
};

export type Blob = Node & GitObject & {
   __typename?: 'Blob';
  abbreviatedOid: Scalars['String'];
  byteSize: Scalars['Int'];
  commitResourcePath: Scalars['URI'];
  commitUrl: Scalars['URI'];
  id: Scalars['ID'];
  isBinary: Scalars['Boolean'];
  isTruncated: Scalars['Boolean'];
  oid: Scalars['GitObjectID'];
  repository: Repository;
  text?: Maybe<Scalars['String']>;
};

export type Bot = Node & Actor & UniformResourceLocatable & {
   __typename?: 'Bot';
  avatarUrl: Scalars['URI'];
  createdAt: Scalars['DateTime'];
  databaseId?: Maybe<Scalars['Int']>;
  id: Scalars['ID'];
  login: Scalars['String'];
  resourcePath: Scalars['URI'];
  updatedAt: Scalars['DateTime'];
  url: Scalars['URI'];
};


export type BotAvatarUrlArgs = {
  size?: Maybe<Scalars['Int']>;
};

export type BranchProtectionRule = Node & {
   __typename?: 'BranchProtectionRule';
  branchProtectionRuleConflicts: BranchProtectionRuleConflictConnection;
  creator?: Maybe<Actor>;
  databaseId?: Maybe<Scalars['Int']>;
  dismissesStaleReviews: Scalars['Boolean'];
  id: Scalars['ID'];
  isAdminEnforced: Scalars['Boolean'];
  matchingRefs: RefConnection;
  pattern: Scalars['String'];
  pushAllowances: PushAllowanceConnection;
  repository?: Maybe<Repository>;
  requiredApprovingReviewCount?: Maybe<Scalars['Int']>;
  requiredStatusCheckContexts?: Maybe<Array<Maybe<Scalars['String']>>>;
  requiresApprovingReviews: Scalars['Boolean'];
  requiresCodeOwnerReviews: Scalars['Boolean'];
  requiresCommitSignatures: Scalars['Boolean'];
  requiresStatusChecks: Scalars['Boolean'];
  requiresStrictStatusChecks: Scalars['Boolean'];
  restrictsPushes: Scalars['Boolean'];
  restrictsReviewDismissals: Scalars['Boolean'];
  reviewDismissalAllowances: ReviewDismissalAllowanceConnection;
};


export type BranchProtectionRuleBranchProtectionRuleConflictsArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type BranchProtectionRuleMatchingRefsArgs = {
  query?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type BranchProtectionRulePushAllowancesArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type BranchProtectionRuleReviewDismissalAllowancesArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};

export type BranchProtectionRuleConflict = {
   __typename?: 'BranchProtectionRuleConflict';
  branchProtectionRule?: Maybe<BranchProtectionRule>;
  conflictingBranchProtectionRule?: Maybe<BranchProtectionRule>;
  ref?: Maybe<Ref>;
};

export type BranchProtectionRuleConflictConnection = {
   __typename?: 'BranchProtectionRuleConflictConnection';
  edges?: Maybe<Array<Maybe<BranchProtectionRuleConflictEdge>>>;
  nodes?: Maybe<Array<Maybe<BranchProtectionRuleConflict>>>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type BranchProtectionRuleConflictEdge = {
   __typename?: 'BranchProtectionRuleConflictEdge';
  cursor: Scalars['String'];
  node?: Maybe<BranchProtectionRuleConflict>;
};

export type BranchProtectionRuleConnection = {
   __typename?: 'BranchProtectionRuleConnection';
  edges?: Maybe<Array<Maybe<BranchProtectionRuleEdge>>>;
  nodes?: Maybe<Array<Maybe<BranchProtectionRule>>>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type BranchProtectionRuleEdge = {
   __typename?: 'BranchProtectionRuleEdge';
  cursor: Scalars['String'];
  node?: Maybe<BranchProtectionRule>;
};

export type CancelEnterpriseAdminInvitationInput = {
  invitationId: Scalars['ID'];
  clientMutationId?: Maybe<Scalars['String']>;
};

export type CancelEnterpriseAdminInvitationPayload = {
   __typename?: 'CancelEnterpriseAdminInvitationPayload';
  clientMutationId?: Maybe<Scalars['String']>;
  invitation?: Maybe<EnterpriseAdministratorInvitation>;
  message?: Maybe<Scalars['String']>;
};

export type ChangeUserStatusInput = {
  emoji?: Maybe<Scalars['String']>;
  message?: Maybe<Scalars['String']>;
  organizationId?: Maybe<Scalars['ID']>;
  limitedAvailability?: Maybe<Scalars['Boolean']>;
  expiresAt?: Maybe<Scalars['DateTime']>;
  clientMutationId?: Maybe<Scalars['String']>;
};

export type ChangeUserStatusPayload = {
   __typename?: 'ChangeUserStatusPayload';
  clientMutationId?: Maybe<Scalars['String']>;
  status?: Maybe<UserStatus>;
};

export type ClearLabelsFromLabelableInput = {
  labelableId: Scalars['ID'];
  clientMutationId?: Maybe<Scalars['String']>;
};

export type ClearLabelsFromLabelablePayload = {
   __typename?: 'ClearLabelsFromLabelablePayload';
  clientMutationId?: Maybe<Scalars['String']>;
  labelable?: Maybe<Labelable>;
};

export type CloneProjectInput = {
  targetOwnerId: Scalars['ID'];
  sourceId: Scalars['ID'];
  includeWorkflows: Scalars['Boolean'];
  name: Scalars['String'];
  body?: Maybe<Scalars['String']>;
  public?: Maybe<Scalars['Boolean']>;
  clientMutationId?: Maybe<Scalars['String']>;
};

export type CloneProjectPayload = {
   __typename?: 'CloneProjectPayload';
  clientMutationId?: Maybe<Scalars['String']>;
  jobStatusId?: Maybe<Scalars['String']>;
  project?: Maybe<Project>;
};

export type CloneTemplateRepositoryInput = {
  repositoryId: Scalars['ID'];
  name: Scalars['String'];
  ownerId: Scalars['ID'];
  description?: Maybe<Scalars['String']>;
  visibility: RepositoryVisibility;
  clientMutationId?: Maybe<Scalars['String']>;
};

export type CloneTemplateRepositoryPayload = {
   __typename?: 'CloneTemplateRepositoryPayload';
  clientMutationId?: Maybe<Scalars['String']>;
  repository?: Maybe<Repository>;
};

export type Closable = {
  closed: Scalars['Boolean'];
  closedAt?: Maybe<Scalars['DateTime']>;
};

export type ClosedEvent = Node & UniformResourceLocatable & {
   __typename?: 'ClosedEvent';
  actor?: Maybe<Actor>;
  closable: Closable;
  closer?: Maybe<Closer>;
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  resourcePath: Scalars['URI'];
  url: Scalars['URI'];
};

export type CloseIssueInput = {
  issueId: Scalars['ID'];
  clientMutationId?: Maybe<Scalars['String']>;
};

export type CloseIssuePayload = {
   __typename?: 'CloseIssuePayload';
  clientMutationId?: Maybe<Scalars['String']>;
  issue?: Maybe<Issue>;
};

export type ClosePullRequestInput = {
  pullRequestId: Scalars['ID'];
  clientMutationId?: Maybe<Scalars['String']>;
};

export type ClosePullRequestPayload = {
   __typename?: 'ClosePullRequestPayload';
  clientMutationId?: Maybe<Scalars['String']>;
  pullRequest?: Maybe<PullRequest>;
};

export type Closer = Commit | PullRequest;

export type CodeOfConduct = Node & {
   __typename?: 'CodeOfConduct';
  body?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  key: Scalars['String'];
  name: Scalars['String'];
  resourcePath?: Maybe<Scalars['URI']>;
  url?: Maybe<Scalars['URI']>;
};

export enum CollaboratorAffiliation {
  Outside = 'OUTSIDE',
  Direct = 'DIRECT',
  All = 'ALL'
}

export type Comment = {
  author?: Maybe<Actor>;
  authorAssociation: CommentAuthorAssociation;
  body: Scalars['String'];
  bodyHTML: Scalars['HTML'];
  bodyText: Scalars['String'];
  createdAt: Scalars['DateTime'];
  createdViaEmail: Scalars['Boolean'];
  editor?: Maybe<Actor>;
  id: Scalars['ID'];
  includesCreatedEdit: Scalars['Boolean'];
  lastEditedAt?: Maybe<Scalars['DateTime']>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  updatedAt: Scalars['DateTime'];
  userContentEdits?: Maybe<UserContentEditConnection>;
  viewerDidAuthor: Scalars['Boolean'];
};


export type CommentUserContentEditsArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};

export enum CommentAuthorAssociation {
  Member = 'MEMBER',
  Owner = 'OWNER',
  Collaborator = 'COLLABORATOR',
  Contributor = 'CONTRIBUTOR',
  FirstTimeContributor = 'FIRST_TIME_CONTRIBUTOR',
  FirstTimer = 'FIRST_TIMER',
  None = 'NONE'
}

export enum CommentCannotUpdateReason {
  Archived = 'ARCHIVED',
  InsufficientAccess = 'INSUFFICIENT_ACCESS',
  Locked = 'LOCKED',
  LoginRequired = 'LOGIN_REQUIRED',
  Maintenance = 'MAINTENANCE',
  VerifiedEmailRequired = 'VERIFIED_EMAIL_REQUIRED',
  Denied = 'DENIED'
}

export type CommentDeletedEvent = Node & {
   __typename?: 'CommentDeletedEvent';
  actor?: Maybe<Actor>;
  createdAt: Scalars['DateTime'];
  databaseId?: Maybe<Scalars['Int']>;
  id: Scalars['ID'];
};

export type Commit = Node & GitObject & Subscribable & UniformResourceLocatable & {
   __typename?: 'Commit';
  abbreviatedOid: Scalars['String'];
  additions: Scalars['Int'];
  associatedPullRequests?: Maybe<PullRequestConnection>;
  author?: Maybe<GitActor>;
  authoredByCommitter: Scalars['Boolean'];
  authoredDate: Scalars['DateTime'];
  blame: Blame;
  changedFiles: Scalars['Int'];
  comments: CommitCommentConnection;
  commitResourcePath: Scalars['URI'];
  commitUrl: Scalars['URI'];
  committedDate: Scalars['DateTime'];
  committedViaWeb: Scalars['Boolean'];
  committer?: Maybe<GitActor>;
  deletions: Scalars['Int'];
  deployments?: Maybe<DeploymentConnection>;
  history: CommitHistoryConnection;
  id: Scalars['ID'];
  message: Scalars['String'];
  messageBody: Scalars['String'];
  messageBodyHTML: Scalars['HTML'];
  messageHeadline: Scalars['String'];
  messageHeadlineHTML: Scalars['HTML'];
  oid: Scalars['GitObjectID'];
  onBehalfOf?: Maybe<Organization>;
  parents: CommitConnection;
  pushedDate?: Maybe<Scalars['DateTime']>;
  repository: Repository;
  resourcePath: Scalars['URI'];
  signature?: Maybe<GitSignature>;
  status?: Maybe<Status>;
  statusCheckRollup?: Maybe<StatusCheckRollup>;
  submodules: SubmoduleConnection;
  tarballUrl: Scalars['URI'];
  tree: Tree;
  treeResourcePath: Scalars['URI'];
  treeUrl: Scalars['URI'];
  url: Scalars['URI'];
  viewerCanSubscribe: Scalars['Boolean'];
  viewerSubscription?: Maybe<SubscriptionState>;
  zipballUrl: Scalars['URI'];
};


export type CommitAssociatedPullRequestsArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<PullRequestOrder>;
};


export type CommitBlameArgs = {
  path: Scalars['String'];
};


export type CommitCommentsArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type CommitDeploymentsArgs = {
  environments?: Maybe<Array<Scalars['String']>>;
  orderBy?: Maybe<DeploymentOrder>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type CommitHistoryArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  path?: Maybe<Scalars['String']>;
  author?: Maybe<CommitAuthor>;
  since?: Maybe<Scalars['GitTimestamp']>;
  until?: Maybe<Scalars['GitTimestamp']>;
};


export type CommitParentsArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type CommitSubmodulesArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};

export type CommitAuthor = {
  id?: Maybe<Scalars['ID']>;
  emails?: Maybe<Array<Scalars['String']>>;
};

export type CommitComment = Node & Comment & Deletable & Minimizable & Updatable & UpdatableComment & Reactable & RepositoryNode & {
   __typename?: 'CommitComment';
  author?: Maybe<Actor>;
  authorAssociation: CommentAuthorAssociation;
  body: Scalars['String'];
  bodyHTML: Scalars['HTML'];
  bodyText: Scalars['String'];
  commit?: Maybe<Commit>;
  createdAt: Scalars['DateTime'];
  createdViaEmail: Scalars['Boolean'];
  databaseId?: Maybe<Scalars['Int']>;
  editor?: Maybe<Actor>;
  id: Scalars['ID'];
  includesCreatedEdit: Scalars['Boolean'];
  isMinimized: Scalars['Boolean'];
  lastEditedAt?: Maybe<Scalars['DateTime']>;
  minimizedReason?: Maybe<Scalars['String']>;
  path?: Maybe<Scalars['String']>;
  position?: Maybe<Scalars['Int']>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  reactionGroups?: Maybe<Array<ReactionGroup>>;
  reactions: ReactionConnection;
  repository: Repository;
  resourcePath: Scalars['URI'];
  updatedAt: Scalars['DateTime'];
  url: Scalars['URI'];
  userContentEdits?: Maybe<UserContentEditConnection>;
  viewerCanDelete: Scalars['Boolean'];
  viewerCanMinimize: Scalars['Boolean'];
  viewerCanReact: Scalars['Boolean'];
  viewerCanUpdate: Scalars['Boolean'];
  viewerCannotUpdateReasons: Array<CommentCannotUpdateReason>;
  viewerDidAuthor: Scalars['Boolean'];
};


export type CommitCommentReactionsArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  content?: Maybe<ReactionContent>;
  orderBy?: Maybe<ReactionOrder>;
};


export type CommitCommentUserContentEditsArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};

export type CommitCommentConnection = {
   __typename?: 'CommitCommentConnection';
  edges?: Maybe<Array<Maybe<CommitCommentEdge>>>;
  nodes?: Maybe<Array<Maybe<CommitComment>>>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type CommitCommentEdge = {
   __typename?: 'CommitCommentEdge';
  cursor: Scalars['String'];
  node?: Maybe<CommitComment>;
};

export type CommitCommentThread = Node & RepositoryNode & {
   __typename?: 'CommitCommentThread';
  comments: CommitCommentConnection;
  commit?: Maybe<Commit>;
  id: Scalars['ID'];
  path?: Maybe<Scalars['String']>;
  position?: Maybe<Scalars['Int']>;
  repository: Repository;
};


export type CommitCommentThreadCommentsArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};

export type CommitConnection = {
   __typename?: 'CommitConnection';
  edges?: Maybe<Array<Maybe<CommitEdge>>>;
  nodes?: Maybe<Array<Maybe<Commit>>>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type CommitContributionOrder = {
  field: CommitContributionOrderField;
  direction: OrderDirection;
};

export enum CommitContributionOrderField {
  OccurredAt = 'OCCURRED_AT',
  CommitCount = 'COMMIT_COUNT'
}

export type CommitContributionsByRepository = {
   __typename?: 'CommitContributionsByRepository';
  contributions: CreatedCommitContributionConnection;
  repository: Repository;
  resourcePath: Scalars['URI'];
  url: Scalars['URI'];
};


export type CommitContributionsByRepositoryContributionsArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<CommitContributionOrder>;
};

export type CommitEdge = {
   __typename?: 'CommitEdge';
  cursor: Scalars['String'];
  node?: Maybe<Commit>;
};

export type CommitHistoryConnection = {
   __typename?: 'CommitHistoryConnection';
  edges?: Maybe<Array<Maybe<CommitEdge>>>;
  nodes?: Maybe<Array<Maybe<Commit>>>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type ConnectedEvent = Node & {
   __typename?: 'ConnectedEvent';
  actor?: Maybe<Actor>;
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  isCrossRepository: Scalars['Boolean'];
  source: ReferencedSubject;
  subject: ReferencedSubject;
};

export type Contribution = {
  isRestricted: Scalars['Boolean'];
  occurredAt: Scalars['DateTime'];
  resourcePath: Scalars['URI'];
  url: Scalars['URI'];
  user: User;
};

export type ContributionCalendar = {
   __typename?: 'ContributionCalendar';
  colors: Array<Scalars['String']>;
  isHalloween: Scalars['Boolean'];
  months: Array<ContributionCalendarMonth>;
  totalContributions: Scalars['Int'];
  weeks: Array<ContributionCalendarWeek>;
};

export type ContributionCalendarDay = {
   __typename?: 'ContributionCalendarDay';
  color: Scalars['String'];
  contributionCount: Scalars['Int'];
  date: Scalars['Date'];
  weekday: Scalars['Int'];
};

export type ContributionCalendarMonth = {
   __typename?: 'ContributionCalendarMonth';
  firstDay: Scalars['Date'];
  name: Scalars['String'];
  totalWeeks: Scalars['Int'];
  year: Scalars['Int'];
};

export type ContributionCalendarWeek = {
   __typename?: 'ContributionCalendarWeek';
  contributionDays: Array<ContributionCalendarDay>;
  firstDay: Scalars['Date'];
};

export type ContributionOrder = {
  field?: Maybe<ContributionOrderField>;
  direction: OrderDirection;
};

export enum ContributionOrderField {
  OccurredAt = 'OCCURRED_AT'
}

export type ContributionsCollection = {
   __typename?: 'ContributionsCollection';
  commitContributionsByRepository: Array<CommitContributionsByRepository>;
  contributionCalendar: ContributionCalendar;
  contributionYears: Array<Scalars['Int']>;
  doesEndInCurrentMonth: Scalars['Boolean'];
  earliestRestrictedContributionDate?: Maybe<Scalars['Date']>;
  endedAt: Scalars['DateTime'];
  firstIssueContribution?: Maybe<CreatedIssueOrRestrictedContribution>;
  firstPullRequestContribution?: Maybe<CreatedPullRequestOrRestrictedContribution>;
  firstRepositoryContribution?: Maybe<CreatedRepositoryOrRestrictedContribution>;
  hasActivityInThePast: Scalars['Boolean'];
  hasAnyContributions: Scalars['Boolean'];
  hasAnyRestrictedContributions: Scalars['Boolean'];
  isSingleDay: Scalars['Boolean'];
  issueContributions: CreatedIssueContributionConnection;
  issueContributionsByRepository: Array<IssueContributionsByRepository>;
  joinedGitHubContribution?: Maybe<JoinedGitHubContribution>;
  latestRestrictedContributionDate?: Maybe<Scalars['Date']>;
  mostRecentCollectionWithActivity?: Maybe<ContributionsCollection>;
  mostRecentCollectionWithoutActivity?: Maybe<ContributionsCollection>;
  popularIssueContribution?: Maybe<CreatedIssueContribution>;
  popularPullRequestContribution?: Maybe<CreatedPullRequestContribution>;
  pullRequestContributions: CreatedPullRequestContributionConnection;
  pullRequestContributionsByRepository: Array<PullRequestContributionsByRepository>;
  pullRequestReviewContributions: CreatedPullRequestReviewContributionConnection;
  pullRequestReviewContributionsByRepository: Array<PullRequestReviewContributionsByRepository>;
  repositoryContributions: CreatedRepositoryContributionConnection;
  restrictedContributionsCount: Scalars['Int'];
  startedAt: Scalars['DateTime'];
  totalCommitContributions: Scalars['Int'];
  totalIssueContributions: Scalars['Int'];
  totalPullRequestContributions: Scalars['Int'];
  totalPullRequestReviewContributions: Scalars['Int'];
  totalRepositoriesWithContributedCommits: Scalars['Int'];
  totalRepositoriesWithContributedIssues: Scalars['Int'];
  totalRepositoriesWithContributedPullRequestReviews: Scalars['Int'];
  totalRepositoriesWithContributedPullRequests: Scalars['Int'];
  totalRepositoryContributions: Scalars['Int'];
  user: User;
};


export type ContributionsCollectionCommitContributionsByRepositoryArgs = {
  maxRepositories?: Maybe<Scalars['Int']>;
};


export type ContributionsCollectionIssueContributionsArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  excludeFirst?: Maybe<Scalars['Boolean']>;
  excludePopular?: Maybe<Scalars['Boolean']>;
  orderBy?: Maybe<ContributionOrder>;
};


export type ContributionsCollectionIssueContributionsByRepositoryArgs = {
  maxRepositories?: Maybe<Scalars['Int']>;
  excludeFirst?: Maybe<Scalars['Boolean']>;
  excludePopular?: Maybe<Scalars['Boolean']>;
};


export type ContributionsCollectionPullRequestContributionsArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  excludeFirst?: Maybe<Scalars['Boolean']>;
  excludePopular?: Maybe<Scalars['Boolean']>;
  orderBy?: Maybe<ContributionOrder>;
};


export type ContributionsCollectionPullRequestContributionsByRepositoryArgs = {
  maxRepositories?: Maybe<Scalars['Int']>;
  excludeFirst?: Maybe<Scalars['Boolean']>;
  excludePopular?: Maybe<Scalars['Boolean']>;
};


export type ContributionsCollectionPullRequestReviewContributionsArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<ContributionOrder>;
};


export type ContributionsCollectionPullRequestReviewContributionsByRepositoryArgs = {
  maxRepositories?: Maybe<Scalars['Int']>;
};


export type ContributionsCollectionRepositoryContributionsArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  excludeFirst?: Maybe<Scalars['Boolean']>;
  orderBy?: Maybe<ContributionOrder>;
};


export type ContributionsCollectionTotalIssueContributionsArgs = {
  excludeFirst?: Maybe<Scalars['Boolean']>;
  excludePopular?: Maybe<Scalars['Boolean']>;
};


export type ContributionsCollectionTotalPullRequestContributionsArgs = {
  excludeFirst?: Maybe<Scalars['Boolean']>;
  excludePopular?: Maybe<Scalars['Boolean']>;
};


export type ContributionsCollectionTotalRepositoriesWithContributedIssuesArgs = {
  excludeFirst?: Maybe<Scalars['Boolean']>;
  excludePopular?: Maybe<Scalars['Boolean']>;
};


export type ContributionsCollectionTotalRepositoriesWithContributedPullRequestsArgs = {
  excludeFirst?: Maybe<Scalars['Boolean']>;
  excludePopular?: Maybe<Scalars['Boolean']>;
};


export type ContributionsCollectionTotalRepositoryContributionsArgs = {
  excludeFirst?: Maybe<Scalars['Boolean']>;
};

export type ConvertedNoteToIssueEvent = Node & {
   __typename?: 'ConvertedNoteToIssueEvent';
  actor?: Maybe<Actor>;
  createdAt: Scalars['DateTime'];
  databaseId?: Maybe<Scalars['Int']>;
  id: Scalars['ID'];
};

export type ConvertProjectCardNoteToIssueInput = {
  projectCardId: Scalars['ID'];
  repositoryId: Scalars['ID'];
  title?: Maybe<Scalars['String']>;
  body?: Maybe<Scalars['String']>;
  clientMutationId?: Maybe<Scalars['String']>;
};

export type ConvertProjectCardNoteToIssuePayload = {
   __typename?: 'ConvertProjectCardNoteToIssuePayload';
  clientMutationId?: Maybe<Scalars['String']>;
  projectCard?: Maybe<ProjectCard>;
};

export type ConvertToDraftEvent = Node & UniformResourceLocatable & {
   __typename?: 'ConvertToDraftEvent';
  actor?: Maybe<Actor>;
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  pullRequest: PullRequest;
  resourcePath: Scalars['URI'];
  url: Scalars['URI'];
};

export type CreateBranchProtectionRuleInput = {
  repositoryId: Scalars['ID'];
  pattern: Scalars['String'];
  requiresApprovingReviews?: Maybe<Scalars['Boolean']>;
  requiredApprovingReviewCount?: Maybe<Scalars['Int']>;
  requiresCommitSignatures?: Maybe<Scalars['Boolean']>;
  isAdminEnforced?: Maybe<Scalars['Boolean']>;
  requiresStatusChecks?: Maybe<Scalars['Boolean']>;
  requiresStrictStatusChecks?: Maybe<Scalars['Boolean']>;
  requiresCodeOwnerReviews?: Maybe<Scalars['Boolean']>;
  dismissesStaleReviews?: Maybe<Scalars['Boolean']>;
  restrictsReviewDismissals?: Maybe<Scalars['Boolean']>;
  reviewDismissalActorIds?: Maybe<Array<Scalars['ID']>>;
  restrictsPushes?: Maybe<Scalars['Boolean']>;
  pushActorIds?: Maybe<Array<Scalars['ID']>>;
  requiredStatusCheckContexts?: Maybe<Array<Scalars['String']>>;
  clientMutationId?: Maybe<Scalars['String']>;
};

export type CreateBranchProtectionRulePayload = {
   __typename?: 'CreateBranchProtectionRulePayload';
  branchProtectionRule?: Maybe<BranchProtectionRule>;
  clientMutationId?: Maybe<Scalars['String']>;
};

export type CreatedCommitContribution = Contribution & {
   __typename?: 'CreatedCommitContribution';
  commitCount: Scalars['Int'];
  isRestricted: Scalars['Boolean'];
  occurredAt: Scalars['DateTime'];
  repository: Repository;
  resourcePath: Scalars['URI'];
  url: Scalars['URI'];
  user: User;
};

export type CreatedCommitContributionConnection = {
   __typename?: 'CreatedCommitContributionConnection';
  edges?: Maybe<Array<Maybe<CreatedCommitContributionEdge>>>;
  nodes?: Maybe<Array<Maybe<CreatedCommitContribution>>>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type CreatedCommitContributionEdge = {
   __typename?: 'CreatedCommitContributionEdge';
  cursor: Scalars['String'];
  node?: Maybe<CreatedCommitContribution>;
};

export type CreatedIssueContribution = Contribution & {
   __typename?: 'CreatedIssueContribution';
  isRestricted: Scalars['Boolean'];
  issue: Issue;
  occurredAt: Scalars['DateTime'];
  resourcePath: Scalars['URI'];
  url: Scalars['URI'];
  user: User;
};

export type CreatedIssueContributionConnection = {
   __typename?: 'CreatedIssueContributionConnection';
  edges?: Maybe<Array<Maybe<CreatedIssueContributionEdge>>>;
  nodes?: Maybe<Array<Maybe<CreatedIssueContribution>>>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type CreatedIssueContributionEdge = {
   __typename?: 'CreatedIssueContributionEdge';
  cursor: Scalars['String'];
  node?: Maybe<CreatedIssueContribution>;
};

export type CreatedIssueOrRestrictedContribution = CreatedIssueContribution | RestrictedContribution;

export type CreatedPullRequestContribution = Contribution & {
   __typename?: 'CreatedPullRequestContribution';
  isRestricted: Scalars['Boolean'];
  occurredAt: Scalars['DateTime'];
  pullRequest: PullRequest;
  resourcePath: Scalars['URI'];
  url: Scalars['URI'];
  user: User;
};

export type CreatedPullRequestContributionConnection = {
   __typename?: 'CreatedPullRequestContributionConnection';
  edges?: Maybe<Array<Maybe<CreatedPullRequestContributionEdge>>>;
  nodes?: Maybe<Array<Maybe<CreatedPullRequestContribution>>>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type CreatedPullRequestContributionEdge = {
   __typename?: 'CreatedPullRequestContributionEdge';
  cursor: Scalars['String'];
  node?: Maybe<CreatedPullRequestContribution>;
};

export type CreatedPullRequestOrRestrictedContribution = CreatedPullRequestContribution | RestrictedContribution;

export type CreatedPullRequestReviewContribution = Contribution & {
   __typename?: 'CreatedPullRequestReviewContribution';
  isRestricted: Scalars['Boolean'];
  occurredAt: Scalars['DateTime'];
  pullRequest: PullRequest;
  pullRequestReview: PullRequestReview;
  repository: Repository;
  resourcePath: Scalars['URI'];
  url: Scalars['URI'];
  user: User;
};

export type CreatedPullRequestReviewContributionConnection = {
   __typename?: 'CreatedPullRequestReviewContributionConnection';
  edges?: Maybe<Array<Maybe<CreatedPullRequestReviewContributionEdge>>>;
  nodes?: Maybe<Array<Maybe<CreatedPullRequestReviewContribution>>>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type CreatedPullRequestReviewContributionEdge = {
   __typename?: 'CreatedPullRequestReviewContributionEdge';
  cursor: Scalars['String'];
  node?: Maybe<CreatedPullRequestReviewContribution>;
};

export type CreatedRepositoryContribution = Contribution & {
   __typename?: 'CreatedRepositoryContribution';
  isRestricted: Scalars['Boolean'];
  occurredAt: Scalars['DateTime'];
  repository: Repository;
  resourcePath: Scalars['URI'];
  url: Scalars['URI'];
  user: User;
};

export type CreatedRepositoryContributionConnection = {
   __typename?: 'CreatedRepositoryContributionConnection';
  edges?: Maybe<Array<Maybe<CreatedRepositoryContributionEdge>>>;
  nodes?: Maybe<Array<Maybe<CreatedRepositoryContribution>>>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type CreatedRepositoryContributionEdge = {
   __typename?: 'CreatedRepositoryContributionEdge';
  cursor: Scalars['String'];
  node?: Maybe<CreatedRepositoryContribution>;
};

export type CreatedRepositoryOrRestrictedContribution = CreatedRepositoryContribution | RestrictedContribution;

export type CreateEnterpriseOrganizationInput = {
  enterpriseId: Scalars['ID'];
  login: Scalars['String'];
  profileName: Scalars['String'];
  billingEmail: Scalars['String'];
  adminLogins: Array<Scalars['String']>;
  clientMutationId?: Maybe<Scalars['String']>;
};

export type CreateEnterpriseOrganizationPayload = {
   __typename?: 'CreateEnterpriseOrganizationPayload';
  clientMutationId?: Maybe<Scalars['String']>;
  enterprise?: Maybe<Enterprise>;
  organization?: Maybe<Organization>;
};

export type CreateIpAllowListEntryInput = {
  ownerId: Scalars['ID'];
  allowListValue: Scalars['String'];
  name?: Maybe<Scalars['String']>;
  isActive: Scalars['Boolean'];
  clientMutationId?: Maybe<Scalars['String']>;
};

export type CreateIpAllowListEntryPayload = {
   __typename?: 'CreateIpAllowListEntryPayload';
  clientMutationId?: Maybe<Scalars['String']>;
  ipAllowListEntry?: Maybe<IpAllowListEntry>;
};

export type CreateIssueInput = {
  repositoryId: Scalars['ID'];
  title: Scalars['String'];
  body?: Maybe<Scalars['String']>;
  assigneeIds?: Maybe<Array<Scalars['ID']>>;
  milestoneId?: Maybe<Scalars['ID']>;
  labelIds?: Maybe<Array<Scalars['ID']>>;
  projectIds?: Maybe<Array<Scalars['ID']>>;
  clientMutationId?: Maybe<Scalars['String']>;
};

export type CreateIssuePayload = {
   __typename?: 'CreateIssuePayload';
  clientMutationId?: Maybe<Scalars['String']>;
  issue?: Maybe<Issue>;
};

export type CreateProjectInput = {
  ownerId: Scalars['ID'];
  name: Scalars['String'];
  body?: Maybe<Scalars['String']>;
  template?: Maybe<ProjectTemplate>;
  repositoryIds?: Maybe<Array<Scalars['ID']>>;
  clientMutationId?: Maybe<Scalars['String']>;
};

export type CreateProjectPayload = {
   __typename?: 'CreateProjectPayload';
  clientMutationId?: Maybe<Scalars['String']>;
  project?: Maybe<Project>;
};

export type CreatePullRequestInput = {
  repositoryId: Scalars['ID'];
  baseRefName: Scalars['String'];
  headRefName: Scalars['String'];
  title: Scalars['String'];
  body?: Maybe<Scalars['String']>;
  maintainerCanModify?: Maybe<Scalars['Boolean']>;
  draft?: Maybe<Scalars['Boolean']>;
  clientMutationId?: Maybe<Scalars['String']>;
};

export type CreatePullRequestPayload = {
   __typename?: 'CreatePullRequestPayload';
  clientMutationId?: Maybe<Scalars['String']>;
  pullRequest?: Maybe<PullRequest>;
};

export type CreateRefInput = {
  repositoryId: Scalars['ID'];
  name: Scalars['String'];
  oid: Scalars['GitObjectID'];
  clientMutationId?: Maybe<Scalars['String']>;
};

export type CreateRefPayload = {
   __typename?: 'CreateRefPayload';
  clientMutationId?: Maybe<Scalars['String']>;
  ref?: Maybe<Ref>;
};

export type CreateRepositoryInput = {
  name: Scalars['String'];
  ownerId?: Maybe<Scalars['ID']>;
  description?: Maybe<Scalars['String']>;
  visibility: RepositoryVisibility;
  template?: Maybe<Scalars['Boolean']>;
  homepageUrl?: Maybe<Scalars['URI']>;
  hasWikiEnabled?: Maybe<Scalars['Boolean']>;
  hasIssuesEnabled?: Maybe<Scalars['Boolean']>;
  teamId?: Maybe<Scalars['ID']>;
  clientMutationId?: Maybe<Scalars['String']>;
};

export type CreateRepositoryPayload = {
   __typename?: 'CreateRepositoryPayload';
  clientMutationId?: Maybe<Scalars['String']>;
  repository?: Maybe<Repository>;
};

export type CreateTeamDiscussionCommentInput = {
  discussionId: Scalars['ID'];
  body: Scalars['String'];
  clientMutationId?: Maybe<Scalars['String']>;
};

export type CreateTeamDiscussionCommentPayload = {
   __typename?: 'CreateTeamDiscussionCommentPayload';
  clientMutationId?: Maybe<Scalars['String']>;
  teamDiscussionComment?: Maybe<TeamDiscussionComment>;
};

export type CreateTeamDiscussionInput = {
  teamId: Scalars['ID'];
  title: Scalars['String'];
  body: Scalars['String'];
  private?: Maybe<Scalars['Boolean']>;
  clientMutationId?: Maybe<Scalars['String']>;
};

export type CreateTeamDiscussionPayload = {
   __typename?: 'CreateTeamDiscussionPayload';
  clientMutationId?: Maybe<Scalars['String']>;
  teamDiscussion?: Maybe<TeamDiscussion>;
};

export type CrossReferencedEvent = Node & UniformResourceLocatable & {
   __typename?: 'CrossReferencedEvent';
  actor?: Maybe<Actor>;
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  isCrossRepository: Scalars['Boolean'];
  referencedAt: Scalars['DateTime'];
  resourcePath: Scalars['URI'];
  source: ReferencedSubject;
  target: ReferencedSubject;
  url: Scalars['URI'];
  willCloseTarget: Scalars['Boolean'];
};



export type DeclineTopicSuggestionInput = {
  repositoryId: Scalars['ID'];
  name: Scalars['String'];
  reason: TopicSuggestionDeclineReason;
  clientMutationId?: Maybe<Scalars['String']>;
};

export type DeclineTopicSuggestionPayload = {
   __typename?: 'DeclineTopicSuggestionPayload';
  clientMutationId?: Maybe<Scalars['String']>;
  topic?: Maybe<Topic>;
};

export enum DefaultRepositoryPermissionField {
  None = 'NONE',
  Read = 'READ',
  Write = 'WRITE',
  Admin = 'ADMIN'
}

export type Deletable = {
  viewerCanDelete: Scalars['Boolean'];
};

export type DeleteBranchProtectionRuleInput = {
  branchProtectionRuleId: Scalars['ID'];
  clientMutationId?: Maybe<Scalars['String']>;
};

export type DeleteBranchProtectionRulePayload = {
   __typename?: 'DeleteBranchProtectionRulePayload';
  clientMutationId?: Maybe<Scalars['String']>;
};

export type DeleteDeploymentInput = {
  id: Scalars['ID'];
  clientMutationId?: Maybe<Scalars['String']>;
};

export type DeleteDeploymentPayload = {
   __typename?: 'DeleteDeploymentPayload';
  clientMutationId?: Maybe<Scalars['String']>;
};

export type DeleteIpAllowListEntryInput = {
  ipAllowListEntryId: Scalars['ID'];
  clientMutationId?: Maybe<Scalars['String']>;
};

export type DeleteIpAllowListEntryPayload = {
   __typename?: 'DeleteIpAllowListEntryPayload';
  clientMutationId?: Maybe<Scalars['String']>;
  ipAllowListEntry?: Maybe<IpAllowListEntry>;
};

export type DeleteIssueCommentInput = {
  id: Scalars['ID'];
  clientMutationId?: Maybe<Scalars['String']>;
};

export type DeleteIssueCommentPayload = {
   __typename?: 'DeleteIssueCommentPayload';
  clientMutationId?: Maybe<Scalars['String']>;
};

export type DeleteIssueInput = {
  issueId: Scalars['ID'];
  clientMutationId?: Maybe<Scalars['String']>;
};

export type DeleteIssuePayload = {
   __typename?: 'DeleteIssuePayload';
  clientMutationId?: Maybe<Scalars['String']>;
  repository?: Maybe<Repository>;
};

export type DeleteProjectCardInput = {
  cardId: Scalars['ID'];
  clientMutationId?: Maybe<Scalars['String']>;
};

export type DeleteProjectCardPayload = {
   __typename?: 'DeleteProjectCardPayload';
  clientMutationId?: Maybe<Scalars['String']>;
  column?: Maybe<ProjectColumn>;
  deletedCardId?: Maybe<Scalars['ID']>;
};

export type DeleteProjectColumnInput = {
  columnId: Scalars['ID'];
  clientMutationId?: Maybe<Scalars['String']>;
};

export type DeleteProjectColumnPayload = {
   __typename?: 'DeleteProjectColumnPayload';
  clientMutationId?: Maybe<Scalars['String']>;
  deletedColumnId?: Maybe<Scalars['ID']>;
  project?: Maybe<Project>;
};

export type DeleteProjectInput = {
  projectId: Scalars['ID'];
  clientMutationId?: Maybe<Scalars['String']>;
};

export type DeleteProjectPayload = {
   __typename?: 'DeleteProjectPayload';
  clientMutationId?: Maybe<Scalars['String']>;
  owner?: Maybe<ProjectOwner>;
};

export type DeletePullRequestReviewCommentInput = {
  id: Scalars['ID'];
  clientMutationId?: Maybe<Scalars['String']>;
};

export type DeletePullRequestReviewCommentPayload = {
   __typename?: 'DeletePullRequestReviewCommentPayload';
  clientMutationId?: Maybe<Scalars['String']>;
  pullRequestReview?: Maybe<PullRequestReview>;
};

export type DeletePullRequestReviewInput = {
  pullRequestReviewId: Scalars['ID'];
  clientMutationId?: Maybe<Scalars['String']>;
};

export type DeletePullRequestReviewPayload = {
   __typename?: 'DeletePullRequestReviewPayload';
  clientMutationId?: Maybe<Scalars['String']>;
  pullRequestReview?: Maybe<PullRequestReview>;
};

export type DeleteRefInput = {
  refId: Scalars['ID'];
  clientMutationId?: Maybe<Scalars['String']>;
};

export type DeleteRefPayload = {
   __typename?: 'DeleteRefPayload';
  clientMutationId?: Maybe<Scalars['String']>;
};

export type DeleteTeamDiscussionCommentInput = {
  id: Scalars['ID'];
  clientMutationId?: Maybe<Scalars['String']>;
};

export type DeleteTeamDiscussionCommentPayload = {
   __typename?: 'DeleteTeamDiscussionCommentPayload';
  clientMutationId?: Maybe<Scalars['String']>;
};

export type DeleteTeamDiscussionInput = {
  id: Scalars['ID'];
  clientMutationId?: Maybe<Scalars['String']>;
};

export type DeleteTeamDiscussionPayload = {
   __typename?: 'DeleteTeamDiscussionPayload';
  clientMutationId?: Maybe<Scalars['String']>;
};

export type DemilestonedEvent = Node & {
   __typename?: 'DemilestonedEvent';
  actor?: Maybe<Actor>;
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  milestoneTitle: Scalars['String'];
  subject: MilestoneItem;
};

export type DeployedEvent = Node & {
   __typename?: 'DeployedEvent';
  actor?: Maybe<Actor>;
  createdAt: Scalars['DateTime'];
  databaseId?: Maybe<Scalars['Int']>;
  deployment: Deployment;
  id: Scalars['ID'];
  pullRequest: PullRequest;
  ref?: Maybe<Ref>;
};

export type DeployKey = Node & {
   __typename?: 'DeployKey';
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  key: Scalars['String'];
  readOnly: Scalars['Boolean'];
  title: Scalars['String'];
  verified: Scalars['Boolean'];
};

export type DeployKeyConnection = {
   __typename?: 'DeployKeyConnection';
  edges?: Maybe<Array<Maybe<DeployKeyEdge>>>;
  nodes?: Maybe<Array<Maybe<DeployKey>>>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type DeployKeyEdge = {
   __typename?: 'DeployKeyEdge';
  cursor: Scalars['String'];
  node?: Maybe<DeployKey>;
};

export type Deployment = Node & {
   __typename?: 'Deployment';
  commit?: Maybe<Commit>;
  commitOid: Scalars['String'];
  createdAt: Scalars['DateTime'];
  creator: Actor;
  databaseId?: Maybe<Scalars['Int']>;
  description?: Maybe<Scalars['String']>;
  environment?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  latestEnvironment?: Maybe<Scalars['String']>;
  latestStatus?: Maybe<DeploymentStatus>;
  originalEnvironment?: Maybe<Scalars['String']>;
  payload?: Maybe<Scalars['String']>;
  ref?: Maybe<Ref>;
  repository: Repository;
  state?: Maybe<DeploymentState>;
  statuses?: Maybe<DeploymentStatusConnection>;
  task?: Maybe<Scalars['String']>;
  updatedAt: Scalars['DateTime'];
};


export type DeploymentStatusesArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};

export type DeploymentConnection = {
   __typename?: 'DeploymentConnection';
  edges?: Maybe<Array<Maybe<DeploymentEdge>>>;
  nodes?: Maybe<Array<Maybe<Deployment>>>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type DeploymentEdge = {
   __typename?: 'DeploymentEdge';
  cursor: Scalars['String'];
  node?: Maybe<Deployment>;
};

export type DeploymentEnvironmentChangedEvent = Node & {
   __typename?: 'DeploymentEnvironmentChangedEvent';
  actor?: Maybe<Actor>;
  createdAt: Scalars['DateTime'];
  deploymentStatus: DeploymentStatus;
  id: Scalars['ID'];
  pullRequest: PullRequest;
};

export type DeploymentOrder = {
  field: DeploymentOrderField;
  direction: OrderDirection;
};

export enum DeploymentOrderField {
  CreatedAt = 'CREATED_AT'
}

export enum DeploymentState {
  Abandoned = 'ABANDONED',
  Active = 'ACTIVE',
  Destroyed = 'DESTROYED',
  Error = 'ERROR',
  Failure = 'FAILURE',
  Inactive = 'INACTIVE',
  Pending = 'PENDING',
  Queued = 'QUEUED',
  InProgress = 'IN_PROGRESS'
}

export type DeploymentStatus = Node & {
   __typename?: 'DeploymentStatus';
  createdAt: Scalars['DateTime'];
  creator: Actor;
  deployment: Deployment;
  description?: Maybe<Scalars['String']>;
  environmentUrl?: Maybe<Scalars['URI']>;
  id: Scalars['ID'];
  logUrl?: Maybe<Scalars['URI']>;
  state: DeploymentStatusState;
  updatedAt: Scalars['DateTime'];
};

export type DeploymentStatusConnection = {
   __typename?: 'DeploymentStatusConnection';
  edges?: Maybe<Array<Maybe<DeploymentStatusEdge>>>;
  nodes?: Maybe<Array<Maybe<DeploymentStatus>>>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type DeploymentStatusEdge = {
   __typename?: 'DeploymentStatusEdge';
  cursor: Scalars['String'];
  node?: Maybe<DeploymentStatus>;
};

export enum DeploymentStatusState {
  Pending = 'PENDING',
  Success = 'SUCCESS',
  Failure = 'FAILURE',
  Inactive = 'INACTIVE',
  Error = 'ERROR',
  Queued = 'QUEUED',
  InProgress = 'IN_PROGRESS'
}

export enum DiffSide {
  Left = 'LEFT',
  Right = 'RIGHT'
}

export type DisconnectedEvent = Node & {
   __typename?: 'DisconnectedEvent';
  actor?: Maybe<Actor>;
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  isCrossRepository: Scalars['Boolean'];
  source: ReferencedSubject;
  subject: ReferencedSubject;
};

export type DismissPullRequestReviewInput = {
  pullRequestReviewId: Scalars['ID'];
  message: Scalars['String'];
  clientMutationId?: Maybe<Scalars['String']>;
};

export type DismissPullRequestReviewPayload = {
   __typename?: 'DismissPullRequestReviewPayload';
  clientMutationId?: Maybe<Scalars['String']>;
  pullRequestReview?: Maybe<PullRequestReview>;
};

export type DraftPullRequestReviewComment = {
  path: Scalars['String'];
  position: Scalars['Int'];
  body: Scalars['String'];
};

export type DraftPullRequestReviewThread = {
  path: Scalars['String'];
  line: Scalars['Int'];
  side?: Maybe<DiffSide>;
  startLine?: Maybe<Scalars['Int']>;
  startSide?: Maybe<DiffSide>;
  body: Scalars['String'];
};

export type Enterprise = Node & {
   __typename?: 'Enterprise';
  avatarUrl: Scalars['URI'];
  billingInfo?: Maybe<EnterpriseBillingInfo>;
  createdAt: Scalars['DateTime'];
  databaseId?: Maybe<Scalars['Int']>;
  description?: Maybe<Scalars['String']>;
  descriptionHTML: Scalars['HTML'];
  id: Scalars['ID'];
  location?: Maybe<Scalars['String']>;
  members: EnterpriseMemberConnection;
  name: Scalars['String'];
  organizations: OrganizationConnection;
  ownerInfo?: Maybe<EnterpriseOwnerInfo>;
  resourcePath: Scalars['URI'];
  slug: Scalars['String'];
  url: Scalars['URI'];
  userAccounts: EnterpriseUserAccountConnection;
  viewerIsAdmin: Scalars['Boolean'];
  websiteUrl?: Maybe<Scalars['URI']>;
};


export type EnterpriseAvatarUrlArgs = {
  size?: Maybe<Scalars['Int']>;
};


export type EnterpriseMembersArgs = {
  organizationLogins?: Maybe<Array<Scalars['String']>>;
  query?: Maybe<Scalars['String']>;
  orderBy?: Maybe<EnterpriseMemberOrder>;
  role?: Maybe<EnterpriseUserAccountMembershipRole>;
  deployment?: Maybe<EnterpriseUserDeployment>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type EnterpriseOrganizationsArgs = {
  query?: Maybe<Scalars['String']>;
  orderBy?: Maybe<OrganizationOrder>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type EnterpriseUserAccountsArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};

export type EnterpriseAdministratorConnection = {
   __typename?: 'EnterpriseAdministratorConnection';
  edges?: Maybe<Array<Maybe<EnterpriseAdministratorEdge>>>;
  nodes?: Maybe<Array<Maybe<User>>>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type EnterpriseAdministratorEdge = {
   __typename?: 'EnterpriseAdministratorEdge';
  cursor: Scalars['String'];
  node?: Maybe<User>;
  role: EnterpriseAdministratorRole;
};

export type EnterpriseAdministratorInvitation = Node & {
   __typename?: 'EnterpriseAdministratorInvitation';
  createdAt: Scalars['DateTime'];
  email?: Maybe<Scalars['String']>;
  enterprise: Enterprise;
  id: Scalars['ID'];
  invitee?: Maybe<User>;
  inviter?: Maybe<User>;
  role: EnterpriseAdministratorRole;
};

export type EnterpriseAdministratorInvitationConnection = {
   __typename?: 'EnterpriseAdministratorInvitationConnection';
  edges?: Maybe<Array<Maybe<EnterpriseAdministratorInvitationEdge>>>;
  nodes?: Maybe<Array<Maybe<EnterpriseAdministratorInvitation>>>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type EnterpriseAdministratorInvitationEdge = {
   __typename?: 'EnterpriseAdministratorInvitationEdge';
  cursor: Scalars['String'];
  node?: Maybe<EnterpriseAdministratorInvitation>;
};

export type EnterpriseAdministratorInvitationOrder = {
  field: EnterpriseAdministratorInvitationOrderField;
  direction: OrderDirection;
};

export enum EnterpriseAdministratorInvitationOrderField {
  CreatedAt = 'CREATED_AT'
}

export enum EnterpriseAdministratorRole {
  Owner = 'OWNER',
  BillingManager = 'BILLING_MANAGER'
}

export type EnterpriseAuditEntryData = {
  enterpriseResourcePath?: Maybe<Scalars['URI']>;
  enterpriseSlug?: Maybe<Scalars['String']>;
  enterpriseUrl?: Maybe<Scalars['URI']>;
};

export type EnterpriseBillingInfo = {
   __typename?: 'EnterpriseBillingInfo';
  allLicensableUsersCount: Scalars['Int'];
  assetPacks: Scalars['Int'];
  /** @deprecated `availableSeats` will be replaced with `totalAvailableLicenses` to provide more clarity on the value being returned Use EnterpriseBillingInfo.totalAvailableLicenses instead. Removal on 2020-01-01 UTC. */
  availableSeats: Scalars['Int'];
  bandwidthQuota: Scalars['Float'];
  bandwidthUsage: Scalars['Float'];
  bandwidthUsagePercentage: Scalars['Int'];
  /** @deprecated `seats` will be replaced with `totalLicenses` to provide more clarity on the value being returned Use EnterpriseBillingInfo.totalLicenses instead. Removal on 2020-01-01 UTC. */
  seats: Scalars['Int'];
  storageQuota: Scalars['Float'];
  storageUsage: Scalars['Float'];
  storageUsagePercentage: Scalars['Int'];
  totalAvailableLicenses: Scalars['Int'];
  totalLicenses: Scalars['Int'];
};

export enum EnterpriseDefaultRepositoryPermissionSettingValue {
  NoPolicy = 'NO_POLICY',
  Admin = 'ADMIN',
  Write = 'WRITE',
  Read = 'READ',
  None = 'NONE'
}

export enum EnterpriseEnabledDisabledSettingValue {
  Enabled = 'ENABLED',
  Disabled = 'DISABLED',
  NoPolicy = 'NO_POLICY'
}

export enum EnterpriseEnabledSettingValue {
  Enabled = 'ENABLED',
  NoPolicy = 'NO_POLICY'
}

export type EnterpriseIdentityProvider = Node & {
   __typename?: 'EnterpriseIdentityProvider';
  digestMethod?: Maybe<SamlDigestAlgorithm>;
  enterprise?: Maybe<Enterprise>;
  externalIdentities: ExternalIdentityConnection;
  id: Scalars['ID'];
  idpCertificate?: Maybe<Scalars['X509Certificate']>;
  issuer?: Maybe<Scalars['String']>;
  recoveryCodes?: Maybe<Array<Scalars['String']>>;
  signatureMethod?: Maybe<SamlSignatureAlgorithm>;
  ssoUrl?: Maybe<Scalars['URI']>;
};


export type EnterpriseIdentityProviderExternalIdentitiesArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};

export type EnterpriseMember = EnterpriseUserAccount | User;

export type EnterpriseMemberConnection = {
   __typename?: 'EnterpriseMemberConnection';
  edges?: Maybe<Array<Maybe<EnterpriseMemberEdge>>>;
  nodes?: Maybe<Array<Maybe<EnterpriseMember>>>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type EnterpriseMemberEdge = {
   __typename?: 'EnterpriseMemberEdge';
  cursor: Scalars['String'];
  isUnlicensed: Scalars['Boolean'];
  node?: Maybe<EnterpriseMember>;
};

export type EnterpriseMemberOrder = {
  field: EnterpriseMemberOrderField;
  direction: OrderDirection;
};

export enum EnterpriseMemberOrderField {
  Login = 'LOGIN',
  CreatedAt = 'CREATED_AT'
}

export enum EnterpriseMembersCanCreateRepositoriesSettingValue {
  NoPolicy = 'NO_POLICY',
  All = 'ALL',
  Public = 'PUBLIC',
  Private = 'PRIVATE',
  Disabled = 'DISABLED'
}

export enum EnterpriseMembersCanMakePurchasesSettingValue {
  Enabled = 'ENABLED',
  Disabled = 'DISABLED'
}

export type EnterpriseOrganizationMembershipConnection = {
   __typename?: 'EnterpriseOrganizationMembershipConnection';
  edges?: Maybe<Array<Maybe<EnterpriseOrganizationMembershipEdge>>>;
  nodes?: Maybe<Array<Maybe<Organization>>>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type EnterpriseOrganizationMembershipEdge = {
   __typename?: 'EnterpriseOrganizationMembershipEdge';
  cursor: Scalars['String'];
  node?: Maybe<Organization>;
  role: EnterpriseUserAccountMembershipRole;
};

export type EnterpriseOutsideCollaboratorConnection = {
   __typename?: 'EnterpriseOutsideCollaboratorConnection';
  edges?: Maybe<Array<Maybe<EnterpriseOutsideCollaboratorEdge>>>;
  nodes?: Maybe<Array<Maybe<User>>>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type EnterpriseOutsideCollaboratorEdge = {
   __typename?: 'EnterpriseOutsideCollaboratorEdge';
  cursor: Scalars['String'];
  isUnlicensed: Scalars['Boolean'];
  node?: Maybe<User>;
  repositories: EnterpriseRepositoryInfoConnection;
};


export type EnterpriseOutsideCollaboratorEdgeRepositoriesArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<RepositoryOrder>;
};

export type EnterpriseOwnerInfo = {
   __typename?: 'EnterpriseOwnerInfo';
  actionExecutionCapabilitySettingOrganizations: OrganizationConnection;
  admins: EnterpriseAdministratorConnection;
  affiliatedUsersWithTwoFactorDisabled: UserConnection;
  affiliatedUsersWithTwoFactorDisabledExist: Scalars['Boolean'];
  allowPrivateRepositoryForkingSetting: EnterpriseEnabledDisabledSettingValue;
  allowPrivateRepositoryForkingSettingOrganizations: OrganizationConnection;
  defaultRepositoryPermissionSetting: EnterpriseDefaultRepositoryPermissionSettingValue;
  defaultRepositoryPermissionSettingOrganizations: OrganizationConnection;
  enterpriseServerInstallations: EnterpriseServerInstallationConnection;
  ipAllowListEnabledSetting: IpAllowListEnabledSettingValue;
  ipAllowListEntries: IpAllowListEntryConnection;
  isUpdatingDefaultRepositoryPermission: Scalars['Boolean'];
  isUpdatingTwoFactorRequirement: Scalars['Boolean'];
  membersCanChangeRepositoryVisibilitySetting: EnterpriseEnabledDisabledSettingValue;
  membersCanChangeRepositoryVisibilitySettingOrganizations: OrganizationConnection;
  membersCanCreateInternalRepositoriesSetting?: Maybe<Scalars['Boolean']>;
  membersCanCreatePrivateRepositoriesSetting?: Maybe<Scalars['Boolean']>;
  membersCanCreatePublicRepositoriesSetting?: Maybe<Scalars['Boolean']>;
  membersCanCreateRepositoriesSetting?: Maybe<EnterpriseMembersCanCreateRepositoriesSettingValue>;
  membersCanCreateRepositoriesSettingOrganizations: OrganizationConnection;
  membersCanDeleteIssuesSetting: EnterpriseEnabledDisabledSettingValue;
  membersCanDeleteIssuesSettingOrganizations: OrganizationConnection;
  membersCanDeleteRepositoriesSetting: EnterpriseEnabledDisabledSettingValue;
  membersCanDeleteRepositoriesSettingOrganizations: OrganizationConnection;
  membersCanInviteCollaboratorsSetting: EnterpriseEnabledDisabledSettingValue;
  membersCanInviteCollaboratorsSettingOrganizations: OrganizationConnection;
  membersCanMakePurchasesSetting: EnterpriseMembersCanMakePurchasesSettingValue;
  membersCanUpdateProtectedBranchesSetting: EnterpriseEnabledDisabledSettingValue;
  membersCanUpdateProtectedBranchesSettingOrganizations: OrganizationConnection;
  membersCanViewDependencyInsightsSetting: EnterpriseEnabledDisabledSettingValue;
  membersCanViewDependencyInsightsSettingOrganizations: OrganizationConnection;
  organizationProjectsSetting: EnterpriseEnabledDisabledSettingValue;
  organizationProjectsSettingOrganizations: OrganizationConnection;
  outsideCollaborators: EnterpriseOutsideCollaboratorConnection;
  pendingAdminInvitations: EnterpriseAdministratorInvitationConnection;
  pendingCollaborators: EnterprisePendingCollaboratorConnection;
  pendingMemberInvitations: EnterprisePendingMemberInvitationConnection;
  repositoryProjectsSetting: EnterpriseEnabledDisabledSettingValue;
  repositoryProjectsSettingOrganizations: OrganizationConnection;
  samlIdentityProvider?: Maybe<EnterpriseIdentityProvider>;
  samlIdentityProviderSettingOrganizations: OrganizationConnection;
  teamDiscussionsSetting: EnterpriseEnabledDisabledSettingValue;
  teamDiscussionsSettingOrganizations: OrganizationConnection;
  twoFactorRequiredSetting: EnterpriseEnabledSettingValue;
  twoFactorRequiredSettingOrganizations: OrganizationConnection;
};


export type EnterpriseOwnerInfoActionExecutionCapabilitySettingOrganizationsArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<OrganizationOrder>;
};


export type EnterpriseOwnerInfoAdminsArgs = {
  query?: Maybe<Scalars['String']>;
  role?: Maybe<EnterpriseAdministratorRole>;
  orderBy?: Maybe<EnterpriseMemberOrder>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type EnterpriseOwnerInfoAffiliatedUsersWithTwoFactorDisabledArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type EnterpriseOwnerInfoAllowPrivateRepositoryForkingSettingOrganizationsArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  value: Scalars['Boolean'];
  orderBy?: Maybe<OrganizationOrder>;
};


export type EnterpriseOwnerInfoDefaultRepositoryPermissionSettingOrganizationsArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  value: DefaultRepositoryPermissionField;
  orderBy?: Maybe<OrganizationOrder>;
};


export type EnterpriseOwnerInfoEnterpriseServerInstallationsArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  connectedOnly?: Maybe<Scalars['Boolean']>;
  orderBy?: Maybe<EnterpriseServerInstallationOrder>;
};


export type EnterpriseOwnerInfoIpAllowListEntriesArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<IpAllowListEntryOrder>;
};


export type EnterpriseOwnerInfoMembersCanChangeRepositoryVisibilitySettingOrganizationsArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  value: Scalars['Boolean'];
  orderBy?: Maybe<OrganizationOrder>;
};


export type EnterpriseOwnerInfoMembersCanCreateRepositoriesSettingOrganizationsArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  value: OrganizationMembersCanCreateRepositoriesSettingValue;
  orderBy?: Maybe<OrganizationOrder>;
};


export type EnterpriseOwnerInfoMembersCanDeleteIssuesSettingOrganizationsArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  value: Scalars['Boolean'];
  orderBy?: Maybe<OrganizationOrder>;
};


export type EnterpriseOwnerInfoMembersCanDeleteRepositoriesSettingOrganizationsArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  value: Scalars['Boolean'];
  orderBy?: Maybe<OrganizationOrder>;
};


export type EnterpriseOwnerInfoMembersCanInviteCollaboratorsSettingOrganizationsArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  value: Scalars['Boolean'];
  orderBy?: Maybe<OrganizationOrder>;
};


export type EnterpriseOwnerInfoMembersCanUpdateProtectedBranchesSettingOrganizationsArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  value: Scalars['Boolean'];
  orderBy?: Maybe<OrganizationOrder>;
};


export type EnterpriseOwnerInfoMembersCanViewDependencyInsightsSettingOrganizationsArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  value: Scalars['Boolean'];
  orderBy?: Maybe<OrganizationOrder>;
};


export type EnterpriseOwnerInfoOrganizationProjectsSettingOrganizationsArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  value: Scalars['Boolean'];
  orderBy?: Maybe<OrganizationOrder>;
};


export type EnterpriseOwnerInfoOutsideCollaboratorsArgs = {
  login?: Maybe<Scalars['String']>;
  query?: Maybe<Scalars['String']>;
  orderBy?: Maybe<EnterpriseMemberOrder>;
  visibility?: Maybe<RepositoryVisibility>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type EnterpriseOwnerInfoPendingAdminInvitationsArgs = {
  query?: Maybe<Scalars['String']>;
  orderBy?: Maybe<EnterpriseAdministratorInvitationOrder>;
  role?: Maybe<EnterpriseAdministratorRole>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type EnterpriseOwnerInfoPendingCollaboratorsArgs = {
  query?: Maybe<Scalars['String']>;
  orderBy?: Maybe<RepositoryInvitationOrder>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type EnterpriseOwnerInfoPendingMemberInvitationsArgs = {
  query?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type EnterpriseOwnerInfoRepositoryProjectsSettingOrganizationsArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  value: Scalars['Boolean'];
  orderBy?: Maybe<OrganizationOrder>;
};


export type EnterpriseOwnerInfoSamlIdentityProviderSettingOrganizationsArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  value: IdentityProviderConfigurationState;
  orderBy?: Maybe<OrganizationOrder>;
};


export type EnterpriseOwnerInfoTeamDiscussionsSettingOrganizationsArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  value: Scalars['Boolean'];
  orderBy?: Maybe<OrganizationOrder>;
};


export type EnterpriseOwnerInfoTwoFactorRequiredSettingOrganizationsArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  value: Scalars['Boolean'];
  orderBy?: Maybe<OrganizationOrder>;
};

export type EnterprisePendingCollaboratorConnection = {
   __typename?: 'EnterprisePendingCollaboratorConnection';
  edges?: Maybe<Array<Maybe<EnterprisePendingCollaboratorEdge>>>;
  nodes?: Maybe<Array<Maybe<User>>>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type EnterprisePendingCollaboratorEdge = {
   __typename?: 'EnterprisePendingCollaboratorEdge';
  cursor: Scalars['String'];
  isUnlicensed: Scalars['Boolean'];
  node?: Maybe<User>;
  repositories: EnterpriseRepositoryInfoConnection;
};


export type EnterprisePendingCollaboratorEdgeRepositoriesArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<RepositoryOrder>;
};

export type EnterprisePendingMemberInvitationConnection = {
   __typename?: 'EnterprisePendingMemberInvitationConnection';
  edges?: Maybe<Array<Maybe<EnterprisePendingMemberInvitationEdge>>>;
  nodes?: Maybe<Array<Maybe<OrganizationInvitation>>>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
  totalUniqueUserCount: Scalars['Int'];
};

export type EnterprisePendingMemberInvitationEdge = {
   __typename?: 'EnterprisePendingMemberInvitationEdge';
  cursor: Scalars['String'];
  isUnlicensed: Scalars['Boolean'];
  node?: Maybe<OrganizationInvitation>;
};

export type EnterpriseRepositoryInfo = Node & {
   __typename?: 'EnterpriseRepositoryInfo';
  id: Scalars['ID'];
  isPrivate: Scalars['Boolean'];
  name: Scalars['String'];
  nameWithOwner: Scalars['String'];
};

export type EnterpriseRepositoryInfoConnection = {
   __typename?: 'EnterpriseRepositoryInfoConnection';
  edges?: Maybe<Array<Maybe<EnterpriseRepositoryInfoEdge>>>;
  nodes?: Maybe<Array<Maybe<EnterpriseRepositoryInfo>>>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type EnterpriseRepositoryInfoEdge = {
   __typename?: 'EnterpriseRepositoryInfoEdge';
  cursor: Scalars['String'];
  node?: Maybe<EnterpriseRepositoryInfo>;
};

export type EnterpriseServerInstallation = Node & {
   __typename?: 'EnterpriseServerInstallation';
  createdAt: Scalars['DateTime'];
  customerName: Scalars['String'];
  hostName: Scalars['String'];
  id: Scalars['ID'];
  isConnected: Scalars['Boolean'];
  updatedAt: Scalars['DateTime'];
  userAccounts: EnterpriseServerUserAccountConnection;
  userAccountsUploads: EnterpriseServerUserAccountsUploadConnection;
};


export type EnterpriseServerInstallationUserAccountsArgs = {
  orderBy?: Maybe<EnterpriseServerUserAccountOrder>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type EnterpriseServerInstallationUserAccountsUploadsArgs = {
  orderBy?: Maybe<EnterpriseServerUserAccountsUploadOrder>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};

export type EnterpriseServerInstallationConnection = {
   __typename?: 'EnterpriseServerInstallationConnection';
  edges?: Maybe<Array<Maybe<EnterpriseServerInstallationEdge>>>;
  nodes?: Maybe<Array<Maybe<EnterpriseServerInstallation>>>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type EnterpriseServerInstallationEdge = {
   __typename?: 'EnterpriseServerInstallationEdge';
  cursor: Scalars['String'];
  node?: Maybe<EnterpriseServerInstallation>;
};

export type EnterpriseServerInstallationOrder = {
  field: EnterpriseServerInstallationOrderField;
  direction: OrderDirection;
};

export enum EnterpriseServerInstallationOrderField {
  HostName = 'HOST_NAME',
  CustomerName = 'CUSTOMER_NAME',
  CreatedAt = 'CREATED_AT'
}

export type EnterpriseServerUserAccount = Node & {
   __typename?: 'EnterpriseServerUserAccount';
  createdAt: Scalars['DateTime'];
  emails: EnterpriseServerUserAccountEmailConnection;
  enterpriseServerInstallation: EnterpriseServerInstallation;
  id: Scalars['ID'];
  isSiteAdmin: Scalars['Boolean'];
  login: Scalars['String'];
  profileName?: Maybe<Scalars['String']>;
  remoteCreatedAt: Scalars['DateTime'];
  remoteUserId: Scalars['Int'];
  updatedAt: Scalars['DateTime'];
};


export type EnterpriseServerUserAccountEmailsArgs = {
  orderBy?: Maybe<EnterpriseServerUserAccountEmailOrder>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};

export type EnterpriseServerUserAccountConnection = {
   __typename?: 'EnterpriseServerUserAccountConnection';
  edges?: Maybe<Array<Maybe<EnterpriseServerUserAccountEdge>>>;
  nodes?: Maybe<Array<Maybe<EnterpriseServerUserAccount>>>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type EnterpriseServerUserAccountEdge = {
   __typename?: 'EnterpriseServerUserAccountEdge';
  cursor: Scalars['String'];
  node?: Maybe<EnterpriseServerUserAccount>;
};

export type EnterpriseServerUserAccountEmail = Node & {
   __typename?: 'EnterpriseServerUserAccountEmail';
  createdAt: Scalars['DateTime'];
  email: Scalars['String'];
  id: Scalars['ID'];
  isPrimary: Scalars['Boolean'];
  updatedAt: Scalars['DateTime'];
  userAccount: EnterpriseServerUserAccount;
};

export type EnterpriseServerUserAccountEmailConnection = {
   __typename?: 'EnterpriseServerUserAccountEmailConnection';
  edges?: Maybe<Array<Maybe<EnterpriseServerUserAccountEmailEdge>>>;
  nodes?: Maybe<Array<Maybe<EnterpriseServerUserAccountEmail>>>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type EnterpriseServerUserAccountEmailEdge = {
   __typename?: 'EnterpriseServerUserAccountEmailEdge';
  cursor: Scalars['String'];
  node?: Maybe<EnterpriseServerUserAccountEmail>;
};

export type EnterpriseServerUserAccountEmailOrder = {
  field: EnterpriseServerUserAccountEmailOrderField;
  direction: OrderDirection;
};

export enum EnterpriseServerUserAccountEmailOrderField {
  Email = 'EMAIL'
}

export type EnterpriseServerUserAccountOrder = {
  field: EnterpriseServerUserAccountOrderField;
  direction: OrderDirection;
};

export enum EnterpriseServerUserAccountOrderField {
  Login = 'LOGIN',
  RemoteCreatedAt = 'REMOTE_CREATED_AT'
}

export type EnterpriseServerUserAccountsUpload = Node & {
   __typename?: 'EnterpriseServerUserAccountsUpload';
  createdAt: Scalars['DateTime'];
  enterprise: Enterprise;
  enterpriseServerInstallation: EnterpriseServerInstallation;
  id: Scalars['ID'];
  name: Scalars['String'];
  syncState: EnterpriseServerUserAccountsUploadSyncState;
  updatedAt: Scalars['DateTime'];
};

export type EnterpriseServerUserAccountsUploadConnection = {
   __typename?: 'EnterpriseServerUserAccountsUploadConnection';
  edges?: Maybe<Array<Maybe<EnterpriseServerUserAccountsUploadEdge>>>;
  nodes?: Maybe<Array<Maybe<EnterpriseServerUserAccountsUpload>>>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type EnterpriseServerUserAccountsUploadEdge = {
   __typename?: 'EnterpriseServerUserAccountsUploadEdge';
  cursor: Scalars['String'];
  node?: Maybe<EnterpriseServerUserAccountsUpload>;
};

export type EnterpriseServerUserAccountsUploadOrder = {
  field: EnterpriseServerUserAccountsUploadOrderField;
  direction: OrderDirection;
};

export enum EnterpriseServerUserAccountsUploadOrderField {
  CreatedAt = 'CREATED_AT'
}

export enum EnterpriseServerUserAccountsUploadSyncState {
  Pending = 'PENDING',
  Success = 'SUCCESS',
  Failure = 'FAILURE'
}

export type EnterpriseUserAccount = Node & Actor & {
   __typename?: 'EnterpriseUserAccount';
  avatarUrl: Scalars['URI'];
  createdAt: Scalars['DateTime'];
  enterprise: Enterprise;
  id: Scalars['ID'];
  login: Scalars['String'];
  name?: Maybe<Scalars['String']>;
  organizations: EnterpriseOrganizationMembershipConnection;
  resourcePath: Scalars['URI'];
  updatedAt: Scalars['DateTime'];
  url: Scalars['URI'];
  user?: Maybe<User>;
};


export type EnterpriseUserAccountAvatarUrlArgs = {
  size?: Maybe<Scalars['Int']>;
};


export type EnterpriseUserAccountOrganizationsArgs = {
  query?: Maybe<Scalars['String']>;
  orderBy?: Maybe<OrganizationOrder>;
  role?: Maybe<EnterpriseUserAccountMembershipRole>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};

export type EnterpriseUserAccountConnection = {
   __typename?: 'EnterpriseUserAccountConnection';
  edges?: Maybe<Array<Maybe<EnterpriseUserAccountEdge>>>;
  nodes?: Maybe<Array<Maybe<EnterpriseUserAccount>>>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type EnterpriseUserAccountEdge = {
   __typename?: 'EnterpriseUserAccountEdge';
  cursor: Scalars['String'];
  node?: Maybe<EnterpriseUserAccount>;
};

export enum EnterpriseUserAccountMembershipRole {
  Member = 'MEMBER',
  Owner = 'OWNER'
}

export enum EnterpriseUserDeployment {
  Cloud = 'CLOUD',
  Server = 'SERVER'
}

export type ExternalIdentity = Node & {
   __typename?: 'ExternalIdentity';
  guid: Scalars['String'];
  id: Scalars['ID'];
  organizationInvitation?: Maybe<OrganizationInvitation>;
  samlIdentity?: Maybe<ExternalIdentitySamlAttributes>;
  scimIdentity?: Maybe<ExternalIdentityScimAttributes>;
  user?: Maybe<User>;
};

export type ExternalIdentityConnection = {
   __typename?: 'ExternalIdentityConnection';
  edges?: Maybe<Array<Maybe<ExternalIdentityEdge>>>;
  nodes?: Maybe<Array<Maybe<ExternalIdentity>>>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type ExternalIdentityEdge = {
   __typename?: 'ExternalIdentityEdge';
  cursor: Scalars['String'];
  node?: Maybe<ExternalIdentity>;
};

export type ExternalIdentitySamlAttributes = {
   __typename?: 'ExternalIdentitySamlAttributes';
  nameId?: Maybe<Scalars['String']>;
};

export type ExternalIdentityScimAttributes = {
   __typename?: 'ExternalIdentityScimAttributes';
  username?: Maybe<Scalars['String']>;
};

export type FollowerConnection = {
   __typename?: 'FollowerConnection';
  edges?: Maybe<Array<Maybe<UserEdge>>>;
  nodes?: Maybe<Array<Maybe<User>>>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type FollowingConnection = {
   __typename?: 'FollowingConnection';
  edges?: Maybe<Array<Maybe<UserEdge>>>;
  nodes?: Maybe<Array<Maybe<User>>>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type FollowUserInput = {
  userId: Scalars['ID'];
  clientMutationId?: Maybe<Scalars['String']>;
};

export type FollowUserPayload = {
   __typename?: 'FollowUserPayload';
  clientMutationId?: Maybe<Scalars['String']>;
  user?: Maybe<User>;
};

export type FundingLink = {
   __typename?: 'FundingLink';
  platform: FundingPlatform;
  url: Scalars['URI'];
};

export enum FundingPlatform {
  Github = 'GITHUB',
  Patreon = 'PATREON',
  OpenCollective = 'OPEN_COLLECTIVE',
  KoFi = 'KO_FI',
  Tidelift = 'TIDELIFT',
  CommunityBridge = 'COMMUNITY_BRIDGE',
  Liberapay = 'LIBERAPAY',
  Issuehunt = 'ISSUEHUNT',
  Otechie = 'OTECHIE',
  Custom = 'CUSTOM'
}

export type GenericHovercardContext = HovercardContext & {
   __typename?: 'GenericHovercardContext';
  message: Scalars['String'];
  octicon: Scalars['String'];
};

export type Gist = Node & Starrable & UniformResourceLocatable & {
   __typename?: 'Gist';
  comments: GistCommentConnection;
  createdAt: Scalars['DateTime'];
  description?: Maybe<Scalars['String']>;
  files?: Maybe<Array<Maybe<GistFile>>>;
  forks: GistConnection;
  id: Scalars['ID'];
  isFork: Scalars['Boolean'];
  isPublic: Scalars['Boolean'];
  name: Scalars['String'];
  owner?: Maybe<RepositoryOwner>;
  pushedAt?: Maybe<Scalars['DateTime']>;
  resourcePath: Scalars['URI'];
  stargazers: StargazerConnection;
  updatedAt: Scalars['DateTime'];
  url: Scalars['URI'];
  viewerHasStarred: Scalars['Boolean'];
};


export type GistCommentsArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type GistFilesArgs = {
  limit?: Maybe<Scalars['Int']>;
  oid?: Maybe<Scalars['GitObjectID']>;
};


export type GistForksArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<GistOrder>;
};


export type GistStargazersArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<StarOrder>;
};

export type GistComment = Node & Comment & Deletable & Minimizable & Updatable & UpdatableComment & {
   __typename?: 'GistComment';
  author?: Maybe<Actor>;
  authorAssociation: CommentAuthorAssociation;
  body: Scalars['String'];
  bodyHTML: Scalars['HTML'];
  bodyText: Scalars['String'];
  createdAt: Scalars['DateTime'];
  createdViaEmail: Scalars['Boolean'];
  databaseId?: Maybe<Scalars['Int']>;
  editor?: Maybe<Actor>;
  gist: Gist;
  id: Scalars['ID'];
  includesCreatedEdit: Scalars['Boolean'];
  isMinimized: Scalars['Boolean'];
  lastEditedAt?: Maybe<Scalars['DateTime']>;
  minimizedReason?: Maybe<Scalars['String']>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  updatedAt: Scalars['DateTime'];
  userContentEdits?: Maybe<UserContentEditConnection>;
  viewerCanDelete: Scalars['Boolean'];
  viewerCanMinimize: Scalars['Boolean'];
  viewerCanUpdate: Scalars['Boolean'];
  viewerCannotUpdateReasons: Array<CommentCannotUpdateReason>;
  viewerDidAuthor: Scalars['Boolean'];
};


export type GistCommentUserContentEditsArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};

export type GistCommentConnection = {
   __typename?: 'GistCommentConnection';
  edges?: Maybe<Array<Maybe<GistCommentEdge>>>;
  nodes?: Maybe<Array<Maybe<GistComment>>>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type GistCommentEdge = {
   __typename?: 'GistCommentEdge';
  cursor: Scalars['String'];
  node?: Maybe<GistComment>;
};

export type GistConnection = {
   __typename?: 'GistConnection';
  edges?: Maybe<Array<Maybe<GistEdge>>>;
  nodes?: Maybe<Array<Maybe<Gist>>>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type GistEdge = {
   __typename?: 'GistEdge';
  cursor: Scalars['String'];
  node?: Maybe<Gist>;
};

export type GistFile = {
   __typename?: 'GistFile';
  encodedName?: Maybe<Scalars['String']>;
  encoding?: Maybe<Scalars['String']>;
  extension?: Maybe<Scalars['String']>;
  isImage: Scalars['Boolean'];
  isTruncated: Scalars['Boolean'];
  language?: Maybe<Language>;
  name?: Maybe<Scalars['String']>;
  size?: Maybe<Scalars['Int']>;
  text?: Maybe<Scalars['String']>;
};


export type GistFileTextArgs = {
  truncate?: Maybe<Scalars['Int']>;
};

export type GistOrder = {
  field: GistOrderField;
  direction: OrderDirection;
};

export enum GistOrderField {
  CreatedAt = 'CREATED_AT',
  UpdatedAt = 'UPDATED_AT',
  PushedAt = 'PUSHED_AT'
}

export enum GistPrivacy {
  Public = 'PUBLIC',
  Secret = 'SECRET',
  All = 'ALL'
}

export type GitActor = {
   __typename?: 'GitActor';
  avatarUrl: Scalars['URI'];
  date?: Maybe<Scalars['GitTimestamp']>;
  email?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  user?: Maybe<User>;
};


export type GitActorAvatarUrlArgs = {
  size?: Maybe<Scalars['Int']>;
};

export type GitHubMetadata = {
   __typename?: 'GitHubMetadata';
  gitHubServicesSha: Scalars['GitObjectID'];
  gitIpAddresses?: Maybe<Array<Scalars['String']>>;
  hookIpAddresses?: Maybe<Array<Scalars['String']>>;
  importerIpAddresses?: Maybe<Array<Scalars['String']>>;
  isPasswordAuthenticationVerifiable: Scalars['Boolean'];
  pagesIpAddresses?: Maybe<Array<Scalars['String']>>;
};

export type GitObject = {
  abbreviatedOid: Scalars['String'];
  commitResourcePath: Scalars['URI'];
  commitUrl: Scalars['URI'];
  id: Scalars['ID'];
  oid: Scalars['GitObjectID'];
  repository: Repository;
};


export type GitSignature = {
  email: Scalars['String'];
  isValid: Scalars['Boolean'];
  payload: Scalars['String'];
  signature: Scalars['String'];
  signer?: Maybe<User>;
  state: GitSignatureState;
  wasSignedByGitHub: Scalars['Boolean'];
};

export enum GitSignatureState {
  Valid = 'VALID',
  Invalid = 'INVALID',
  MalformedSig = 'MALFORMED_SIG',
  UnknownKey = 'UNKNOWN_KEY',
  BadEmail = 'BAD_EMAIL',
  UnverifiedEmail = 'UNVERIFIED_EMAIL',
  NoUser = 'NO_USER',
  UnknownSigType = 'UNKNOWN_SIG_TYPE',
  Unsigned = 'UNSIGNED',
  GpgverifyUnavailable = 'GPGVERIFY_UNAVAILABLE',
  GpgverifyError = 'GPGVERIFY_ERROR',
  NotSigningKey = 'NOT_SIGNING_KEY',
  ExpiredKey = 'EXPIRED_KEY',
  OcspPending = 'OCSP_PENDING',
  OcspError = 'OCSP_ERROR',
  BadCert = 'BAD_CERT',
  OcspRevoked = 'OCSP_REVOKED'
}



export type GpgSignature = GitSignature & {
   __typename?: 'GpgSignature';
  email: Scalars['String'];
  isValid: Scalars['Boolean'];
  keyId?: Maybe<Scalars['String']>;
  payload: Scalars['String'];
  signature: Scalars['String'];
  signer?: Maybe<User>;
  state: GitSignatureState;
  wasSignedByGitHub: Scalars['Boolean'];
};

export type HeadRefDeletedEvent = Node & {
   __typename?: 'HeadRefDeletedEvent';
  actor?: Maybe<Actor>;
  createdAt: Scalars['DateTime'];
  headRef?: Maybe<Ref>;
  headRefName: Scalars['String'];
  id: Scalars['ID'];
  pullRequest: PullRequest;
};

export type HeadRefForcePushedEvent = Node & {
   __typename?: 'HeadRefForcePushedEvent';
  actor?: Maybe<Actor>;
  afterCommit?: Maybe<Commit>;
  beforeCommit?: Maybe<Commit>;
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  pullRequest: PullRequest;
  ref?: Maybe<Ref>;
};

export type HeadRefRestoredEvent = Node & {
   __typename?: 'HeadRefRestoredEvent';
  actor?: Maybe<Actor>;
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  pullRequest: PullRequest;
};

export type Hovercard = {
   __typename?: 'Hovercard';
  contexts: Array<HovercardContext>;
};

export type HovercardContext = {
  message: Scalars['String'];
  octicon: Scalars['String'];
};


export enum IdentityProviderConfigurationState {
  Enforced = 'ENFORCED',
  Configured = 'CONFIGURED',
  Unconfigured = 'UNCONFIGURED'
}

export type InviteEnterpriseAdminInput = {
  enterpriseId: Scalars['ID'];
  invitee?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  role?: Maybe<EnterpriseAdministratorRole>;
  clientMutationId?: Maybe<Scalars['String']>;
};

export type InviteEnterpriseAdminPayload = {
   __typename?: 'InviteEnterpriseAdminPayload';
  clientMutationId?: Maybe<Scalars['String']>;
  invitation?: Maybe<EnterpriseAdministratorInvitation>;
};

export enum IpAllowListEnabledSettingValue {
  Enabled = 'ENABLED',
  Disabled = 'DISABLED'
}

export type IpAllowListEntry = Node & {
   __typename?: 'IpAllowListEntry';
  allowListValue: Scalars['String'];
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  isActive: Scalars['Boolean'];
  name?: Maybe<Scalars['String']>;
  owner: IpAllowListOwner;
  updatedAt: Scalars['DateTime'];
};

export type IpAllowListEntryConnection = {
   __typename?: 'IpAllowListEntryConnection';
  edges?: Maybe<Array<Maybe<IpAllowListEntryEdge>>>;
  nodes?: Maybe<Array<Maybe<IpAllowListEntry>>>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type IpAllowListEntryEdge = {
   __typename?: 'IpAllowListEntryEdge';
  cursor: Scalars['String'];
  node?: Maybe<IpAllowListEntry>;
};

export type IpAllowListEntryOrder = {
  field: IpAllowListEntryOrderField;
  direction: OrderDirection;
};

export enum IpAllowListEntryOrderField {
  CreatedAt = 'CREATED_AT',
  AllowListValue = 'ALLOW_LIST_VALUE'
}

export type IpAllowListOwner = Enterprise | Organization;

export type Issue = Node & Assignable & Closable & Comment & Updatable & UpdatableComment & Labelable & Lockable & Reactable & RepositoryNode & Subscribable & UniformResourceLocatable & {
   __typename?: 'Issue';
  activeLockReason?: Maybe<LockReason>;
  assignees: UserConnection;
  author?: Maybe<Actor>;
  authorAssociation: CommentAuthorAssociation;
  body: Scalars['String'];
  bodyHTML: Scalars['HTML'];
  bodyText: Scalars['String'];
  closed: Scalars['Boolean'];
  closedAt?: Maybe<Scalars['DateTime']>;
  comments: IssueCommentConnection;
  createdAt: Scalars['DateTime'];
  createdViaEmail: Scalars['Boolean'];
  databaseId?: Maybe<Scalars['Int']>;
  editor?: Maybe<Actor>;
  hovercard: Hovercard;
  id: Scalars['ID'];
  includesCreatedEdit: Scalars['Boolean'];
  labels?: Maybe<LabelConnection>;
  lastEditedAt?: Maybe<Scalars['DateTime']>;
  locked: Scalars['Boolean'];
  milestone?: Maybe<Milestone>;
  number: Scalars['Int'];
  participants: UserConnection;
  projectCards: ProjectCardConnection;
  publishedAt?: Maybe<Scalars['DateTime']>;
  reactionGroups?: Maybe<Array<ReactionGroup>>;
  reactions: ReactionConnection;
  repository: Repository;
  resourcePath: Scalars['URI'];
  state: IssueState;
  /** @deprecated `timeline` will be removed Use Issue.timelineItems instead. Removal on 2019-10-01 UTC. */
  timeline: IssueTimelineConnection;
  timelineItems: IssueTimelineItemsConnection;
  title: Scalars['String'];
  updatedAt: Scalars['DateTime'];
  url: Scalars['URI'];
  userContentEdits?: Maybe<UserContentEditConnection>;
  viewerCanReact: Scalars['Boolean'];
  viewerCanSubscribe: Scalars['Boolean'];
  viewerCanUpdate: Scalars['Boolean'];
  viewerCannotUpdateReasons: Array<CommentCannotUpdateReason>;
  viewerDidAuthor: Scalars['Boolean'];
  viewerSubscription?: Maybe<SubscriptionState>;
};


export type IssueAssigneesArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type IssueCommentsArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type IssueHovercardArgs = {
  includeNotificationContexts?: Maybe<Scalars['Boolean']>;
};


export type IssueLabelsArgs = {
  orderBy?: Maybe<LabelOrder>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type IssueParticipantsArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type IssueProjectCardsArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  archivedStates?: Maybe<Array<Maybe<ProjectCardArchivedState>>>;
};


export type IssueReactionsArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  content?: Maybe<ReactionContent>;
  orderBy?: Maybe<ReactionOrder>;
};


export type IssueTimelineArgs = {
  since?: Maybe<Scalars['DateTime']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type IssueTimelineItemsArgs = {
  since?: Maybe<Scalars['DateTime']>;
  skip?: Maybe<Scalars['Int']>;
  itemTypes?: Maybe<Array<IssueTimelineItemsItemType>>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type IssueUserContentEditsArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};

export type IssueComment = Node & Comment & Deletable & Minimizable & Updatable & UpdatableComment & Reactable & RepositoryNode & {
   __typename?: 'IssueComment';
  author?: Maybe<Actor>;
  authorAssociation: CommentAuthorAssociation;
  body: Scalars['String'];
  bodyHTML: Scalars['HTML'];
  bodyText: Scalars['String'];
  createdAt: Scalars['DateTime'];
  createdViaEmail: Scalars['Boolean'];
  databaseId?: Maybe<Scalars['Int']>;
  editor?: Maybe<Actor>;
  id: Scalars['ID'];
  includesCreatedEdit: Scalars['Boolean'];
  isMinimized: Scalars['Boolean'];
  issue: Issue;
  lastEditedAt?: Maybe<Scalars['DateTime']>;
  minimizedReason?: Maybe<Scalars['String']>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  pullRequest?: Maybe<PullRequest>;
  reactionGroups?: Maybe<Array<ReactionGroup>>;
  reactions: ReactionConnection;
  repository: Repository;
  resourcePath: Scalars['URI'];
  updatedAt: Scalars['DateTime'];
  url: Scalars['URI'];
  userContentEdits?: Maybe<UserContentEditConnection>;
  viewerCanDelete: Scalars['Boolean'];
  viewerCanMinimize: Scalars['Boolean'];
  viewerCanReact: Scalars['Boolean'];
  viewerCanUpdate: Scalars['Boolean'];
  viewerCannotUpdateReasons: Array<CommentCannotUpdateReason>;
  viewerDidAuthor: Scalars['Boolean'];
};


export type IssueCommentReactionsArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  content?: Maybe<ReactionContent>;
  orderBy?: Maybe<ReactionOrder>;
};


export type IssueCommentUserContentEditsArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};

export type IssueCommentConnection = {
   __typename?: 'IssueCommentConnection';
  edges?: Maybe<Array<Maybe<IssueCommentEdge>>>;
  nodes?: Maybe<Array<Maybe<IssueComment>>>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type IssueCommentEdge = {
   __typename?: 'IssueCommentEdge';
  cursor: Scalars['String'];
  node?: Maybe<IssueComment>;
};

export type IssueConnection = {
   __typename?: 'IssueConnection';
  edges?: Maybe<Array<Maybe<IssueEdge>>>;
  nodes?: Maybe<Array<Maybe<Issue>>>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type IssueContributionsByRepository = {
   __typename?: 'IssueContributionsByRepository';
  contributions: CreatedIssueContributionConnection;
  repository: Repository;
};


export type IssueContributionsByRepositoryContributionsArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<ContributionOrder>;
};

export type IssueEdge = {
   __typename?: 'IssueEdge';
  cursor: Scalars['String'];
  node?: Maybe<Issue>;
};

export type IssueFilters = {
  assignee?: Maybe<Scalars['String']>;
  createdBy?: Maybe<Scalars['String']>;
  labels?: Maybe<Array<Scalars['String']>>;
  mentioned?: Maybe<Scalars['String']>;
  milestone?: Maybe<Scalars['String']>;
  since?: Maybe<Scalars['DateTime']>;
  states?: Maybe<Array<IssueState>>;
  viewerSubscribed?: Maybe<Scalars['Boolean']>;
};

export type IssueOrder = {
  field: IssueOrderField;
  direction: OrderDirection;
};

export enum IssueOrderField {
  CreatedAt = 'CREATED_AT',
  UpdatedAt = 'UPDATED_AT',
  Comments = 'COMMENTS'
}

export type IssueOrPullRequest = Issue | PullRequest;

export enum IssueState {
  Open = 'OPEN',
  Closed = 'CLOSED'
}

export type IssueTimelineConnection = {
   __typename?: 'IssueTimelineConnection';
  edges?: Maybe<Array<Maybe<IssueTimelineItemEdge>>>;
  nodes?: Maybe<Array<Maybe<IssueTimelineItem>>>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type IssueTimelineItem = AssignedEvent | ClosedEvent | Commit | CrossReferencedEvent | DemilestonedEvent | IssueComment | LabeledEvent | LockedEvent | MilestonedEvent | ReferencedEvent | RenamedTitleEvent | ReopenedEvent | SubscribedEvent | TransferredEvent | UnassignedEvent | UnlabeledEvent | UnlockedEvent | UnsubscribedEvent | UserBlockedEvent;

export type IssueTimelineItemEdge = {
   __typename?: 'IssueTimelineItemEdge';
  cursor: Scalars['String'];
  node?: Maybe<IssueTimelineItem>;
};

export type IssueTimelineItems = AddedToProjectEvent | AssignedEvent | ClosedEvent | CommentDeletedEvent | ConnectedEvent | ConvertedNoteToIssueEvent | CrossReferencedEvent | DemilestonedEvent | DisconnectedEvent | IssueComment | LabeledEvent | LockedEvent | MarkedAsDuplicateEvent | MentionedEvent | MilestonedEvent | MovedColumnsInProjectEvent | PinnedEvent | ReferencedEvent | RemovedFromProjectEvent | RenamedTitleEvent | ReopenedEvent | SubscribedEvent | TransferredEvent | UnassignedEvent | UnlabeledEvent | UnlockedEvent | UnmarkedAsDuplicateEvent | UnpinnedEvent | UnsubscribedEvent | UserBlockedEvent;

export type IssueTimelineItemsConnection = {
   __typename?: 'IssueTimelineItemsConnection';
  edges?: Maybe<Array<Maybe<IssueTimelineItemsEdge>>>;
  filteredCount: Scalars['Int'];
  nodes?: Maybe<Array<Maybe<IssueTimelineItems>>>;
  pageCount: Scalars['Int'];
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
  updatedAt: Scalars['DateTime'];
};

export type IssueTimelineItemsEdge = {
   __typename?: 'IssueTimelineItemsEdge';
  cursor: Scalars['String'];
  node?: Maybe<IssueTimelineItems>;
};

export enum IssueTimelineItemsItemType {
  IssueComment = 'ISSUE_COMMENT',
  CrossReferencedEvent = 'CROSS_REFERENCED_EVENT',
  AddedToProjectEvent = 'ADDED_TO_PROJECT_EVENT',
  AssignedEvent = 'ASSIGNED_EVENT',
  ClosedEvent = 'CLOSED_EVENT',
  CommentDeletedEvent = 'COMMENT_DELETED_EVENT',
  ConnectedEvent = 'CONNECTED_EVENT',
  ConvertedNoteToIssueEvent = 'CONVERTED_NOTE_TO_ISSUE_EVENT',
  DemilestonedEvent = 'DEMILESTONED_EVENT',
  DisconnectedEvent = 'DISCONNECTED_EVENT',
  LabeledEvent = 'LABELED_EVENT',
  LockedEvent = 'LOCKED_EVENT',
  MarkedAsDuplicateEvent = 'MARKED_AS_DUPLICATE_EVENT',
  MentionedEvent = 'MENTIONED_EVENT',
  MilestonedEvent = 'MILESTONED_EVENT',
  MovedColumnsInProjectEvent = 'MOVED_COLUMNS_IN_PROJECT_EVENT',
  PinnedEvent = 'PINNED_EVENT',
  ReferencedEvent = 'REFERENCED_EVENT',
  RemovedFromProjectEvent = 'REMOVED_FROM_PROJECT_EVENT',
  RenamedTitleEvent = 'RENAMED_TITLE_EVENT',
  ReopenedEvent = 'REOPENED_EVENT',
  SubscribedEvent = 'SUBSCRIBED_EVENT',
  TransferredEvent = 'TRANSFERRED_EVENT',
  UnassignedEvent = 'UNASSIGNED_EVENT',
  UnlabeledEvent = 'UNLABELED_EVENT',
  UnlockedEvent = 'UNLOCKED_EVENT',
  UserBlockedEvent = 'USER_BLOCKED_EVENT',
  UnmarkedAsDuplicateEvent = 'UNMARKED_AS_DUPLICATE_EVENT',
  UnpinnedEvent = 'UNPINNED_EVENT',
  UnsubscribedEvent = 'UNSUBSCRIBED_EVENT'
}

export type JoinedGitHubContribution = Contribution & {
   __typename?: 'JoinedGitHubContribution';
  isRestricted: Scalars['Boolean'];
  occurredAt: Scalars['DateTime'];
  resourcePath: Scalars['URI'];
  url: Scalars['URI'];
  user: User;
};

export type Label = Node & {
   __typename?: 'Label';
  color: Scalars['String'];
  createdAt?: Maybe<Scalars['DateTime']>;
  description?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  isDefault: Scalars['Boolean'];
  issues: IssueConnection;
  name: Scalars['String'];
  pullRequests: PullRequestConnection;
  repository: Repository;
  resourcePath: Scalars['URI'];
  updatedAt?: Maybe<Scalars['DateTime']>;
  url: Scalars['URI'];
};


export type LabelIssuesArgs = {
  orderBy?: Maybe<IssueOrder>;
  labels?: Maybe<Array<Scalars['String']>>;
  states?: Maybe<Array<IssueState>>;
  filterBy?: Maybe<IssueFilters>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type LabelPullRequestsArgs = {
  states?: Maybe<Array<PullRequestState>>;
  labels?: Maybe<Array<Scalars['String']>>;
  headRefName?: Maybe<Scalars['String']>;
  baseRefName?: Maybe<Scalars['String']>;
  orderBy?: Maybe<IssueOrder>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};

export type Labelable = {
  labels?: Maybe<LabelConnection>;
};


export type LabelableLabelsArgs = {
  orderBy?: Maybe<LabelOrder>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};

export type LabelConnection = {
   __typename?: 'LabelConnection';
  edges?: Maybe<Array<Maybe<LabelEdge>>>;
  nodes?: Maybe<Array<Maybe<Label>>>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type LabeledEvent = Node & {
   __typename?: 'LabeledEvent';
  actor?: Maybe<Actor>;
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  label: Label;
  labelable: Labelable;
};

export type LabelEdge = {
   __typename?: 'LabelEdge';
  cursor: Scalars['String'];
  node?: Maybe<Label>;
};

export type LabelOrder = {
  field: LabelOrderField;
  direction: OrderDirection;
};

export enum LabelOrderField {
  Name = 'NAME',
  CreatedAt = 'CREATED_AT'
}

export type Language = Node & {
   __typename?: 'Language';
  color?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  name: Scalars['String'];
};

export type LanguageConnection = {
   __typename?: 'LanguageConnection';
  edges?: Maybe<Array<Maybe<LanguageEdge>>>;
  nodes?: Maybe<Array<Maybe<Language>>>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
  totalSize: Scalars['Int'];
};

export type LanguageEdge = {
   __typename?: 'LanguageEdge';
  cursor: Scalars['String'];
  node: Language;
  size: Scalars['Int'];
};

export type LanguageOrder = {
  field: LanguageOrderField;
  direction: OrderDirection;
};

export enum LanguageOrderField {
  Size = 'SIZE'
}

export type License = Node & {
   __typename?: 'License';
  body: Scalars['String'];
  conditions: Array<Maybe<LicenseRule>>;
  description?: Maybe<Scalars['String']>;
  featured: Scalars['Boolean'];
  hidden: Scalars['Boolean'];
  id: Scalars['ID'];
  implementation?: Maybe<Scalars['String']>;
  key: Scalars['String'];
  limitations: Array<Maybe<LicenseRule>>;
  name: Scalars['String'];
  nickname?: Maybe<Scalars['String']>;
  permissions: Array<Maybe<LicenseRule>>;
  pseudoLicense: Scalars['Boolean'];
  spdxId?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['URI']>;
};

export type LicenseRule = {
   __typename?: 'LicenseRule';
  description: Scalars['String'];
  key: Scalars['String'];
  label: Scalars['String'];
};

export type LinkRepositoryToProjectInput = {
  projectId: Scalars['ID'];
  repositoryId: Scalars['ID'];
  clientMutationId?: Maybe<Scalars['String']>;
};

export type LinkRepositoryToProjectPayload = {
   __typename?: 'LinkRepositoryToProjectPayload';
  clientMutationId?: Maybe<Scalars['String']>;
  project?: Maybe<Project>;
  repository?: Maybe<Repository>;
};

export type Lockable = {
  activeLockReason?: Maybe<LockReason>;
  locked: Scalars['Boolean'];
};

export type LockedEvent = Node & {
   __typename?: 'LockedEvent';
  actor?: Maybe<Actor>;
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  lockReason?: Maybe<LockReason>;
  lockable: Lockable;
};

export type LockLockableInput = {
  lockableId: Scalars['ID'];
  lockReason?: Maybe<LockReason>;
  clientMutationId?: Maybe<Scalars['String']>;
};

export type LockLockablePayload = {
   __typename?: 'LockLockablePayload';
  actor?: Maybe<Actor>;
  clientMutationId?: Maybe<Scalars['String']>;
  lockedRecord?: Maybe<Lockable>;
};

export enum LockReason {
  OffTopic = 'OFF_TOPIC',
  TooHeated = 'TOO_HEATED',
  Resolved = 'RESOLVED',
  Spam = 'SPAM'
}

export type Mannequin = Node & Actor & UniformResourceLocatable & {
   __typename?: 'Mannequin';
  avatarUrl: Scalars['URI'];
  createdAt: Scalars['DateTime'];
  databaseId?: Maybe<Scalars['Int']>;
  email?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  login: Scalars['String'];
  resourcePath: Scalars['URI'];
  updatedAt: Scalars['DateTime'];
  url: Scalars['URI'];
};


export type MannequinAvatarUrlArgs = {
  size?: Maybe<Scalars['Int']>;
};

export type MarkedAsDuplicateEvent = Node & {
   __typename?: 'MarkedAsDuplicateEvent';
  actor?: Maybe<Actor>;
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
};

export type MarketplaceCategory = Node & {
   __typename?: 'MarketplaceCategory';
  description?: Maybe<Scalars['String']>;
  howItWorks?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  name: Scalars['String'];
  primaryListingCount: Scalars['Int'];
  resourcePath: Scalars['URI'];
  secondaryListingCount: Scalars['Int'];
  slug: Scalars['String'];
  url: Scalars['URI'];
};

export type MarketplaceListing = Node & {
   __typename?: 'MarketplaceListing';
  app?: Maybe<App>;
  companyUrl?: Maybe<Scalars['URI']>;
  configurationResourcePath: Scalars['URI'];
  configurationUrl: Scalars['URI'];
  documentationUrl?: Maybe<Scalars['URI']>;
  extendedDescription?: Maybe<Scalars['String']>;
  extendedDescriptionHTML: Scalars['HTML'];
  fullDescription: Scalars['String'];
  fullDescriptionHTML: Scalars['HTML'];
  /** @deprecated `hasApprovalBeenRequested` will be removed. Use `isVerificationPendingFromDraft` instead. Removal on 2019-10-01 UTC. */
  hasApprovalBeenRequested: Scalars['Boolean'];
  hasPublishedFreeTrialPlans: Scalars['Boolean'];
  hasTermsOfService: Scalars['Boolean'];
  howItWorks?: Maybe<Scalars['String']>;
  howItWorksHTML: Scalars['HTML'];
  id: Scalars['ID'];
  installationUrl?: Maybe<Scalars['URI']>;
  installedForViewer: Scalars['Boolean'];
  /** @deprecated `isApproved` will be removed. Use `isPublic` instead. Removal on 2019-10-01 UTC. */
  isApproved: Scalars['Boolean'];
  isArchived: Scalars['Boolean'];
  /** @deprecated `isDelisted` will be removed. Use `isArchived` instead. Removal on 2019-10-01 UTC. */
  isDelisted: Scalars['Boolean'];
  isDraft: Scalars['Boolean'];
  isPaid: Scalars['Boolean'];
  isPublic: Scalars['Boolean'];
  isRejected: Scalars['Boolean'];
  isUnverified: Scalars['Boolean'];
  isUnverifiedPending: Scalars['Boolean'];
  isVerificationPendingFromDraft: Scalars['Boolean'];
  isVerificationPendingFromUnverified: Scalars['Boolean'];
  isVerified: Scalars['Boolean'];
  logoBackgroundColor: Scalars['String'];
  logoUrl?: Maybe<Scalars['URI']>;
  name: Scalars['String'];
  normalizedShortDescription: Scalars['String'];
  pricingUrl?: Maybe<Scalars['URI']>;
  primaryCategory: MarketplaceCategory;
  privacyPolicyUrl: Scalars['URI'];
  resourcePath: Scalars['URI'];
  screenshotUrls: Array<Maybe<Scalars['String']>>;
  secondaryCategory?: Maybe<MarketplaceCategory>;
  shortDescription: Scalars['String'];
  slug: Scalars['String'];
  statusUrl?: Maybe<Scalars['URI']>;
  supportEmail?: Maybe<Scalars['String']>;
  supportUrl: Scalars['URI'];
  termsOfServiceUrl?: Maybe<Scalars['URI']>;
  url: Scalars['URI'];
  viewerCanAddPlans: Scalars['Boolean'];
  viewerCanApprove: Scalars['Boolean'];
  viewerCanDelist: Scalars['Boolean'];
  viewerCanEdit: Scalars['Boolean'];
  viewerCanEditCategories: Scalars['Boolean'];
  viewerCanEditPlans: Scalars['Boolean'];
  viewerCanRedraft: Scalars['Boolean'];
  viewerCanReject: Scalars['Boolean'];
  viewerCanRequestApproval: Scalars['Boolean'];
  viewerHasPurchased: Scalars['Boolean'];
  viewerHasPurchasedForAllOrganizations: Scalars['Boolean'];
  viewerIsListingAdmin: Scalars['Boolean'];
};


export type MarketplaceListingLogoUrlArgs = {
  size?: Maybe<Scalars['Int']>;
};

export type MarketplaceListingConnection = {
   __typename?: 'MarketplaceListingConnection';
  edges?: Maybe<Array<Maybe<MarketplaceListingEdge>>>;
  nodes?: Maybe<Array<Maybe<MarketplaceListing>>>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type MarketplaceListingEdge = {
   __typename?: 'MarketplaceListingEdge';
  cursor: Scalars['String'];
  node?: Maybe<MarketplaceListing>;
};

export type MarkPullRequestReadyForReviewInput = {
  pullRequestId: Scalars['ID'];
  clientMutationId?: Maybe<Scalars['String']>;
};

export type MarkPullRequestReadyForReviewPayload = {
   __typename?: 'MarkPullRequestReadyForReviewPayload';
  clientMutationId?: Maybe<Scalars['String']>;
  pullRequest?: Maybe<PullRequest>;
};

export type MembersCanDeleteReposClearAuditEntry = Node & AuditEntry & EnterpriseAuditEntryData & OrganizationAuditEntryData & {
   __typename?: 'MembersCanDeleteReposClearAuditEntry';
  action: Scalars['String'];
  actor?: Maybe<AuditEntryActor>;
  actorIp?: Maybe<Scalars['String']>;
  actorLocation?: Maybe<ActorLocation>;
  actorLogin?: Maybe<Scalars['String']>;
  actorResourcePath?: Maybe<Scalars['URI']>;
  actorUrl?: Maybe<Scalars['URI']>;
  createdAt: Scalars['PreciseDateTime'];
  enterpriseResourcePath?: Maybe<Scalars['URI']>;
  enterpriseSlug?: Maybe<Scalars['String']>;
  enterpriseUrl?: Maybe<Scalars['URI']>;
  id: Scalars['ID'];
  operationType?: Maybe<OperationType>;
  organization?: Maybe<Organization>;
  organizationName?: Maybe<Scalars['String']>;
  organizationResourcePath?: Maybe<Scalars['URI']>;
  organizationUrl?: Maybe<Scalars['URI']>;
  user?: Maybe<User>;
  userLogin?: Maybe<Scalars['String']>;
  userResourcePath?: Maybe<Scalars['URI']>;
  userUrl?: Maybe<Scalars['URI']>;
};

export type MembersCanDeleteReposDisableAuditEntry = Node & AuditEntry & EnterpriseAuditEntryData & OrganizationAuditEntryData & {
   __typename?: 'MembersCanDeleteReposDisableAuditEntry';
  action: Scalars['String'];
  actor?: Maybe<AuditEntryActor>;
  actorIp?: Maybe<Scalars['String']>;
  actorLocation?: Maybe<ActorLocation>;
  actorLogin?: Maybe<Scalars['String']>;
  actorResourcePath?: Maybe<Scalars['URI']>;
  actorUrl?: Maybe<Scalars['URI']>;
  createdAt: Scalars['PreciseDateTime'];
  enterpriseResourcePath?: Maybe<Scalars['URI']>;
  enterpriseSlug?: Maybe<Scalars['String']>;
  enterpriseUrl?: Maybe<Scalars['URI']>;
  id: Scalars['ID'];
  operationType?: Maybe<OperationType>;
  organization?: Maybe<Organization>;
  organizationName?: Maybe<Scalars['String']>;
  organizationResourcePath?: Maybe<Scalars['URI']>;
  organizationUrl?: Maybe<Scalars['URI']>;
  user?: Maybe<User>;
  userLogin?: Maybe<Scalars['String']>;
  userResourcePath?: Maybe<Scalars['URI']>;
  userUrl?: Maybe<Scalars['URI']>;
};

export type MembersCanDeleteReposEnableAuditEntry = Node & AuditEntry & EnterpriseAuditEntryData & OrganizationAuditEntryData & {
   __typename?: 'MembersCanDeleteReposEnableAuditEntry';
  action: Scalars['String'];
  actor?: Maybe<AuditEntryActor>;
  actorIp?: Maybe<Scalars['String']>;
  actorLocation?: Maybe<ActorLocation>;
  actorLogin?: Maybe<Scalars['String']>;
  actorResourcePath?: Maybe<Scalars['URI']>;
  actorUrl?: Maybe<Scalars['URI']>;
  createdAt: Scalars['PreciseDateTime'];
  enterpriseResourcePath?: Maybe<Scalars['URI']>;
  enterpriseSlug?: Maybe<Scalars['String']>;
  enterpriseUrl?: Maybe<Scalars['URI']>;
  id: Scalars['ID'];
  operationType?: Maybe<OperationType>;
  organization?: Maybe<Organization>;
  organizationName?: Maybe<Scalars['String']>;
  organizationResourcePath?: Maybe<Scalars['URI']>;
  organizationUrl?: Maybe<Scalars['URI']>;
  user?: Maybe<User>;
  userLogin?: Maybe<Scalars['String']>;
  userResourcePath?: Maybe<Scalars['URI']>;
  userUrl?: Maybe<Scalars['URI']>;
};

export type MemberStatusable = {
  memberStatuses: UserStatusConnection;
};


export type MemberStatusableMemberStatusesArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<UserStatusOrder>;
};

export type MentionedEvent = Node & {
   __typename?: 'MentionedEvent';
  actor?: Maybe<Actor>;
  createdAt: Scalars['DateTime'];
  databaseId?: Maybe<Scalars['Int']>;
  id: Scalars['ID'];
};

export enum MergeableState {
  Mergeable = 'MERGEABLE',
  Conflicting = 'CONFLICTING',
  Unknown = 'UNKNOWN'
}

export type MergeBranchInput = {
  repositoryId: Scalars['ID'];
  base: Scalars['String'];
  head: Scalars['String'];
  commitMessage?: Maybe<Scalars['String']>;
  clientMutationId?: Maybe<Scalars['String']>;
};

export type MergeBranchPayload = {
   __typename?: 'MergeBranchPayload';
  clientMutationId?: Maybe<Scalars['String']>;
  mergeCommit?: Maybe<Commit>;
};

export type MergedEvent = Node & UniformResourceLocatable & {
   __typename?: 'MergedEvent';
  actor?: Maybe<Actor>;
  commit?: Maybe<Commit>;
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  mergeRef?: Maybe<Ref>;
  mergeRefName: Scalars['String'];
  pullRequest: PullRequest;
  resourcePath: Scalars['URI'];
  url: Scalars['URI'];
};

export type MergePullRequestInput = {
  pullRequestId: Scalars['ID'];
  commitHeadline?: Maybe<Scalars['String']>;
  commitBody?: Maybe<Scalars['String']>;
  expectedHeadOid?: Maybe<Scalars['GitObjectID']>;
  mergeMethod?: Maybe<PullRequestMergeMethod>;
  clientMutationId?: Maybe<Scalars['String']>;
};

export type MergePullRequestPayload = {
   __typename?: 'MergePullRequestPayload';
  actor?: Maybe<Actor>;
  clientMutationId?: Maybe<Scalars['String']>;
  pullRequest?: Maybe<PullRequest>;
};

export type Milestone = Node & Closable & UniformResourceLocatable & {
   __typename?: 'Milestone';
  closed: Scalars['Boolean'];
  closedAt?: Maybe<Scalars['DateTime']>;
  createdAt: Scalars['DateTime'];
  creator?: Maybe<Actor>;
  description?: Maybe<Scalars['String']>;
  dueOn?: Maybe<Scalars['DateTime']>;
  id: Scalars['ID'];
  issuePrioritiesDebug: Scalars['String'];
  issues: IssueConnection;
  number: Scalars['Int'];
  pullRequests: PullRequestConnection;
  repository: Repository;
  resourcePath: Scalars['URI'];
  state: MilestoneState;
  title: Scalars['String'];
  updatedAt: Scalars['DateTime'];
  url: Scalars['URI'];
};


export type MilestoneIssuesArgs = {
  orderBy?: Maybe<IssueOrder>;
  labels?: Maybe<Array<Scalars['String']>>;
  states?: Maybe<Array<IssueState>>;
  filterBy?: Maybe<IssueFilters>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type MilestonePullRequestsArgs = {
  states?: Maybe<Array<PullRequestState>>;
  labels?: Maybe<Array<Scalars['String']>>;
  headRefName?: Maybe<Scalars['String']>;
  baseRefName?: Maybe<Scalars['String']>;
  orderBy?: Maybe<IssueOrder>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};

export type MilestoneConnection = {
   __typename?: 'MilestoneConnection';
  edges?: Maybe<Array<Maybe<MilestoneEdge>>>;
  nodes?: Maybe<Array<Maybe<Milestone>>>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type MilestonedEvent = Node & {
   __typename?: 'MilestonedEvent';
  actor?: Maybe<Actor>;
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  milestoneTitle: Scalars['String'];
  subject: MilestoneItem;
};

export type MilestoneEdge = {
   __typename?: 'MilestoneEdge';
  cursor: Scalars['String'];
  node?: Maybe<Milestone>;
};

export type MilestoneItem = Issue | PullRequest;

export type MilestoneOrder = {
  field: MilestoneOrderField;
  direction: OrderDirection;
};

export enum MilestoneOrderField {
  DueDate = 'DUE_DATE',
  CreatedAt = 'CREATED_AT',
  UpdatedAt = 'UPDATED_AT',
  Number = 'NUMBER'
}

export enum MilestoneState {
  Open = 'OPEN',
  Closed = 'CLOSED'
}

export type Minimizable = {
  isMinimized: Scalars['Boolean'];
  minimizedReason?: Maybe<Scalars['String']>;
  viewerCanMinimize: Scalars['Boolean'];
};

export type MinimizeCommentInput = {
  subjectId: Scalars['ID'];
  classifier: ReportedContentClassifiers;
  clientMutationId?: Maybe<Scalars['String']>;
};

export type MinimizeCommentPayload = {
   __typename?: 'MinimizeCommentPayload';
  clientMutationId?: Maybe<Scalars['String']>;
  minimizedComment?: Maybe<Minimizable>;
};

export type MovedColumnsInProjectEvent = Node & {
   __typename?: 'MovedColumnsInProjectEvent';
  actor?: Maybe<Actor>;
  createdAt: Scalars['DateTime'];
  databaseId?: Maybe<Scalars['Int']>;
  id: Scalars['ID'];
};

export type MoveProjectCardInput = {
  cardId: Scalars['ID'];
  columnId: Scalars['ID'];
  afterCardId?: Maybe<Scalars['ID']>;
  clientMutationId?: Maybe<Scalars['String']>;
};

export type MoveProjectCardPayload = {
   __typename?: 'MoveProjectCardPayload';
  cardEdge?: Maybe<ProjectCardEdge>;
  clientMutationId?: Maybe<Scalars['String']>;
};

export type MoveProjectColumnInput = {
  columnId: Scalars['ID'];
  afterColumnId?: Maybe<Scalars['ID']>;
  clientMutationId?: Maybe<Scalars['String']>;
};

export type MoveProjectColumnPayload = {
   __typename?: 'MoveProjectColumnPayload';
  clientMutationId?: Maybe<Scalars['String']>;
  columnEdge?: Maybe<ProjectColumnEdge>;
};

export type Mutation = {
   __typename?: 'Mutation';
  acceptEnterpriseAdministratorInvitation?: Maybe<AcceptEnterpriseAdministratorInvitationPayload>;
  acceptTopicSuggestion?: Maybe<AcceptTopicSuggestionPayload>;
  addAssigneesToAssignable?: Maybe<AddAssigneesToAssignablePayload>;
  addComment?: Maybe<AddCommentPayload>;
  addLabelsToLabelable?: Maybe<AddLabelsToLabelablePayload>;
  addProjectCard?: Maybe<AddProjectCardPayload>;
  addProjectColumn?: Maybe<AddProjectColumnPayload>;
  addPullRequestReview?: Maybe<AddPullRequestReviewPayload>;
  addPullRequestReviewComment?: Maybe<AddPullRequestReviewCommentPayload>;
  addPullRequestReviewThread?: Maybe<AddPullRequestReviewThreadPayload>;
  addReaction?: Maybe<AddReactionPayload>;
  addStar?: Maybe<AddStarPayload>;
  archiveRepository?: Maybe<ArchiveRepositoryPayload>;
  cancelEnterpriseAdminInvitation?: Maybe<CancelEnterpriseAdminInvitationPayload>;
  changeUserStatus?: Maybe<ChangeUserStatusPayload>;
  clearLabelsFromLabelable?: Maybe<ClearLabelsFromLabelablePayload>;
  cloneProject?: Maybe<CloneProjectPayload>;
  cloneTemplateRepository?: Maybe<CloneTemplateRepositoryPayload>;
  closeIssue?: Maybe<CloseIssuePayload>;
  closePullRequest?: Maybe<ClosePullRequestPayload>;
  convertProjectCardNoteToIssue?: Maybe<ConvertProjectCardNoteToIssuePayload>;
  createBranchProtectionRule?: Maybe<CreateBranchProtectionRulePayload>;
  createEnterpriseOrganization?: Maybe<CreateEnterpriseOrganizationPayload>;
  createIpAllowListEntry?: Maybe<CreateIpAllowListEntryPayload>;
  createIssue?: Maybe<CreateIssuePayload>;
  createProject?: Maybe<CreateProjectPayload>;
  createPullRequest?: Maybe<CreatePullRequestPayload>;
  createRef?: Maybe<CreateRefPayload>;
  createRepository?: Maybe<CreateRepositoryPayload>;
  createTeamDiscussion?: Maybe<CreateTeamDiscussionPayload>;
  createTeamDiscussionComment?: Maybe<CreateTeamDiscussionCommentPayload>;
  declineTopicSuggestion?: Maybe<DeclineTopicSuggestionPayload>;
  deleteBranchProtectionRule?: Maybe<DeleteBranchProtectionRulePayload>;
  deleteDeployment?: Maybe<DeleteDeploymentPayload>;
  deleteIpAllowListEntry?: Maybe<DeleteIpAllowListEntryPayload>;
  deleteIssue?: Maybe<DeleteIssuePayload>;
  deleteIssueComment?: Maybe<DeleteIssueCommentPayload>;
  deleteProject?: Maybe<DeleteProjectPayload>;
  deleteProjectCard?: Maybe<DeleteProjectCardPayload>;
  deleteProjectColumn?: Maybe<DeleteProjectColumnPayload>;
  deletePullRequestReview?: Maybe<DeletePullRequestReviewPayload>;
  deletePullRequestReviewComment?: Maybe<DeletePullRequestReviewCommentPayload>;
  deleteRef?: Maybe<DeleteRefPayload>;
  deleteTeamDiscussion?: Maybe<DeleteTeamDiscussionPayload>;
  deleteTeamDiscussionComment?: Maybe<DeleteTeamDiscussionCommentPayload>;
  dismissPullRequestReview?: Maybe<DismissPullRequestReviewPayload>;
  followUser?: Maybe<FollowUserPayload>;
  inviteEnterpriseAdmin?: Maybe<InviteEnterpriseAdminPayload>;
  linkRepositoryToProject?: Maybe<LinkRepositoryToProjectPayload>;
  lockLockable?: Maybe<LockLockablePayload>;
  markPullRequestReadyForReview?: Maybe<MarkPullRequestReadyForReviewPayload>;
  mergeBranch?: Maybe<MergeBranchPayload>;
  mergePullRequest?: Maybe<MergePullRequestPayload>;
  minimizeComment?: Maybe<MinimizeCommentPayload>;
  moveProjectCard?: Maybe<MoveProjectCardPayload>;
  moveProjectColumn?: Maybe<MoveProjectColumnPayload>;
  regenerateEnterpriseIdentityProviderRecoveryCodes?: Maybe<RegenerateEnterpriseIdentityProviderRecoveryCodesPayload>;
  removeAssigneesFromAssignable?: Maybe<RemoveAssigneesFromAssignablePayload>;
  removeEnterpriseAdmin?: Maybe<RemoveEnterpriseAdminPayload>;
  removeEnterpriseIdentityProvider?: Maybe<RemoveEnterpriseIdentityProviderPayload>;
  removeEnterpriseOrganization?: Maybe<RemoveEnterpriseOrganizationPayload>;
  removeLabelsFromLabelable?: Maybe<RemoveLabelsFromLabelablePayload>;
  removeOutsideCollaborator?: Maybe<RemoveOutsideCollaboratorPayload>;
  removeReaction?: Maybe<RemoveReactionPayload>;
  removeStar?: Maybe<RemoveStarPayload>;
  reopenIssue?: Maybe<ReopenIssuePayload>;
  reopenPullRequest?: Maybe<ReopenPullRequestPayload>;
  requestReviews?: Maybe<RequestReviewsPayload>;
  resolveReviewThread?: Maybe<ResolveReviewThreadPayload>;
  setEnterpriseIdentityProvider?: Maybe<SetEnterpriseIdentityProviderPayload>;
  submitPullRequestReview?: Maybe<SubmitPullRequestReviewPayload>;
  transferIssue?: Maybe<TransferIssuePayload>;
  unarchiveRepository?: Maybe<UnarchiveRepositoryPayload>;
  unfollowUser?: Maybe<UnfollowUserPayload>;
  unlinkRepositoryFromProject?: Maybe<UnlinkRepositoryFromProjectPayload>;
  unlockLockable?: Maybe<UnlockLockablePayload>;
  unmarkIssueAsDuplicate?: Maybe<UnmarkIssueAsDuplicatePayload>;
  unminimizeComment?: Maybe<UnminimizeCommentPayload>;
  unresolveReviewThread?: Maybe<UnresolveReviewThreadPayload>;
  updateBranchProtectionRule?: Maybe<UpdateBranchProtectionRulePayload>;
  updateEnterpriseActionExecutionCapabilitySetting?: Maybe<UpdateEnterpriseActionExecutionCapabilitySettingPayload>;
  updateEnterpriseAdministratorRole?: Maybe<UpdateEnterpriseAdministratorRolePayload>;
  updateEnterpriseAllowPrivateRepositoryForkingSetting?: Maybe<UpdateEnterpriseAllowPrivateRepositoryForkingSettingPayload>;
  updateEnterpriseDefaultRepositoryPermissionSetting?: Maybe<UpdateEnterpriseDefaultRepositoryPermissionSettingPayload>;
  updateEnterpriseMembersCanChangeRepositoryVisibilitySetting?: Maybe<UpdateEnterpriseMembersCanChangeRepositoryVisibilitySettingPayload>;
  updateEnterpriseMembersCanCreateRepositoriesSetting?: Maybe<UpdateEnterpriseMembersCanCreateRepositoriesSettingPayload>;
  updateEnterpriseMembersCanDeleteIssuesSetting?: Maybe<UpdateEnterpriseMembersCanDeleteIssuesSettingPayload>;
  updateEnterpriseMembersCanDeleteRepositoriesSetting?: Maybe<UpdateEnterpriseMembersCanDeleteRepositoriesSettingPayload>;
  updateEnterpriseMembersCanInviteCollaboratorsSetting?: Maybe<UpdateEnterpriseMembersCanInviteCollaboratorsSettingPayload>;
  updateEnterpriseMembersCanMakePurchasesSetting?: Maybe<UpdateEnterpriseMembersCanMakePurchasesSettingPayload>;
  updateEnterpriseMembersCanUpdateProtectedBranchesSetting?: Maybe<UpdateEnterpriseMembersCanUpdateProtectedBranchesSettingPayload>;
  updateEnterpriseMembersCanViewDependencyInsightsSetting?: Maybe<UpdateEnterpriseMembersCanViewDependencyInsightsSettingPayload>;
  updateEnterpriseOrganizationProjectsSetting?: Maybe<UpdateEnterpriseOrganizationProjectsSettingPayload>;
  updateEnterpriseProfile?: Maybe<UpdateEnterpriseProfilePayload>;
  updateEnterpriseRepositoryProjectsSetting?: Maybe<UpdateEnterpriseRepositoryProjectsSettingPayload>;
  updateEnterpriseTeamDiscussionsSetting?: Maybe<UpdateEnterpriseTeamDiscussionsSettingPayload>;
  updateEnterpriseTwoFactorAuthenticationRequiredSetting?: Maybe<UpdateEnterpriseTwoFactorAuthenticationRequiredSettingPayload>;
  updateIpAllowListEnabledSetting?: Maybe<UpdateIpAllowListEnabledSettingPayload>;
  updateIpAllowListEntry?: Maybe<UpdateIpAllowListEntryPayload>;
  updateIssue?: Maybe<UpdateIssuePayload>;
  updateIssueComment?: Maybe<UpdateIssueCommentPayload>;
  updateProject?: Maybe<UpdateProjectPayload>;
  updateProjectCard?: Maybe<UpdateProjectCardPayload>;
  updateProjectColumn?: Maybe<UpdateProjectColumnPayload>;
  updatePullRequest?: Maybe<UpdatePullRequestPayload>;
  updatePullRequestReview?: Maybe<UpdatePullRequestReviewPayload>;
  updatePullRequestReviewComment?: Maybe<UpdatePullRequestReviewCommentPayload>;
  updateRef?: Maybe<UpdateRefPayload>;
  updateRepository?: Maybe<UpdateRepositoryPayload>;
  updateSubscription?: Maybe<UpdateSubscriptionPayload>;
  updateTeamDiscussion?: Maybe<UpdateTeamDiscussionPayload>;
  updateTeamDiscussionComment?: Maybe<UpdateTeamDiscussionCommentPayload>;
  updateTopics?: Maybe<UpdateTopicsPayload>;
};


export type MutationAcceptEnterpriseAdministratorInvitationArgs = {
  input: AcceptEnterpriseAdministratorInvitationInput;
};


export type MutationAcceptTopicSuggestionArgs = {
  input: AcceptTopicSuggestionInput;
};


export type MutationAddAssigneesToAssignableArgs = {
  input: AddAssigneesToAssignableInput;
};


export type MutationAddCommentArgs = {
  input: AddCommentInput;
};


export type MutationAddLabelsToLabelableArgs = {
  input: AddLabelsToLabelableInput;
};


export type MutationAddProjectCardArgs = {
  input: AddProjectCardInput;
};


export type MutationAddProjectColumnArgs = {
  input: AddProjectColumnInput;
};


export type MutationAddPullRequestReviewArgs = {
  input: AddPullRequestReviewInput;
};


export type MutationAddPullRequestReviewCommentArgs = {
  input: AddPullRequestReviewCommentInput;
};


export type MutationAddPullRequestReviewThreadArgs = {
  input: AddPullRequestReviewThreadInput;
};


export type MutationAddReactionArgs = {
  input: AddReactionInput;
};


export type MutationAddStarArgs = {
  input: AddStarInput;
};


export type MutationArchiveRepositoryArgs = {
  input: ArchiveRepositoryInput;
};


export type MutationCancelEnterpriseAdminInvitationArgs = {
  input: CancelEnterpriseAdminInvitationInput;
};


export type MutationChangeUserStatusArgs = {
  input: ChangeUserStatusInput;
};


export type MutationClearLabelsFromLabelableArgs = {
  input: ClearLabelsFromLabelableInput;
};


export type MutationCloneProjectArgs = {
  input: CloneProjectInput;
};


export type MutationCloneTemplateRepositoryArgs = {
  input: CloneTemplateRepositoryInput;
};


export type MutationCloseIssueArgs = {
  input: CloseIssueInput;
};


export type MutationClosePullRequestArgs = {
  input: ClosePullRequestInput;
};


export type MutationConvertProjectCardNoteToIssueArgs = {
  input: ConvertProjectCardNoteToIssueInput;
};


export type MutationCreateBranchProtectionRuleArgs = {
  input: CreateBranchProtectionRuleInput;
};


export type MutationCreateEnterpriseOrganizationArgs = {
  input: CreateEnterpriseOrganizationInput;
};


export type MutationCreateIpAllowListEntryArgs = {
  input: CreateIpAllowListEntryInput;
};


export type MutationCreateIssueArgs = {
  input: CreateIssueInput;
};


export type MutationCreateProjectArgs = {
  input: CreateProjectInput;
};


export type MutationCreatePullRequestArgs = {
  input: CreatePullRequestInput;
};


export type MutationCreateRefArgs = {
  input: CreateRefInput;
};


export type MutationCreateRepositoryArgs = {
  input: CreateRepositoryInput;
};


export type MutationCreateTeamDiscussionArgs = {
  input: CreateTeamDiscussionInput;
};


export type MutationCreateTeamDiscussionCommentArgs = {
  input: CreateTeamDiscussionCommentInput;
};


export type MutationDeclineTopicSuggestionArgs = {
  input: DeclineTopicSuggestionInput;
};


export type MutationDeleteBranchProtectionRuleArgs = {
  input: DeleteBranchProtectionRuleInput;
};


export type MutationDeleteDeploymentArgs = {
  input: DeleteDeploymentInput;
};


export type MutationDeleteIpAllowListEntryArgs = {
  input: DeleteIpAllowListEntryInput;
};


export type MutationDeleteIssueArgs = {
  input: DeleteIssueInput;
};


export type MutationDeleteIssueCommentArgs = {
  input: DeleteIssueCommentInput;
};


export type MutationDeleteProjectArgs = {
  input: DeleteProjectInput;
};


export type MutationDeleteProjectCardArgs = {
  input: DeleteProjectCardInput;
};


export type MutationDeleteProjectColumnArgs = {
  input: DeleteProjectColumnInput;
};


export type MutationDeletePullRequestReviewArgs = {
  input: DeletePullRequestReviewInput;
};


export type MutationDeletePullRequestReviewCommentArgs = {
  input: DeletePullRequestReviewCommentInput;
};


export type MutationDeleteRefArgs = {
  input: DeleteRefInput;
};


export type MutationDeleteTeamDiscussionArgs = {
  input: DeleteTeamDiscussionInput;
};


export type MutationDeleteTeamDiscussionCommentArgs = {
  input: DeleteTeamDiscussionCommentInput;
};


export type MutationDismissPullRequestReviewArgs = {
  input: DismissPullRequestReviewInput;
};


export type MutationFollowUserArgs = {
  input: FollowUserInput;
};


export type MutationInviteEnterpriseAdminArgs = {
  input: InviteEnterpriseAdminInput;
};


export type MutationLinkRepositoryToProjectArgs = {
  input: LinkRepositoryToProjectInput;
};


export type MutationLockLockableArgs = {
  input: LockLockableInput;
};


export type MutationMarkPullRequestReadyForReviewArgs = {
  input: MarkPullRequestReadyForReviewInput;
};


export type MutationMergeBranchArgs = {
  input: MergeBranchInput;
};


export type MutationMergePullRequestArgs = {
  input: MergePullRequestInput;
};


export type MutationMinimizeCommentArgs = {
  input: MinimizeCommentInput;
};


export type MutationMoveProjectCardArgs = {
  input: MoveProjectCardInput;
};


export type MutationMoveProjectColumnArgs = {
  input: MoveProjectColumnInput;
};


export type MutationRegenerateEnterpriseIdentityProviderRecoveryCodesArgs = {
  input: RegenerateEnterpriseIdentityProviderRecoveryCodesInput;
};


export type MutationRemoveAssigneesFromAssignableArgs = {
  input: RemoveAssigneesFromAssignableInput;
};


export type MutationRemoveEnterpriseAdminArgs = {
  input: RemoveEnterpriseAdminInput;
};


export type MutationRemoveEnterpriseIdentityProviderArgs = {
  input: RemoveEnterpriseIdentityProviderInput;
};


export type MutationRemoveEnterpriseOrganizationArgs = {
  input: RemoveEnterpriseOrganizationInput;
};


export type MutationRemoveLabelsFromLabelableArgs = {
  input: RemoveLabelsFromLabelableInput;
};


export type MutationRemoveOutsideCollaboratorArgs = {
  input: RemoveOutsideCollaboratorInput;
};


export type MutationRemoveReactionArgs = {
  input: RemoveReactionInput;
};


export type MutationRemoveStarArgs = {
  input: RemoveStarInput;
};


export type MutationReopenIssueArgs = {
  input: ReopenIssueInput;
};


export type MutationReopenPullRequestArgs = {
  input: ReopenPullRequestInput;
};


export type MutationRequestReviewsArgs = {
  input: RequestReviewsInput;
};


export type MutationResolveReviewThreadArgs = {
  input: ResolveReviewThreadInput;
};


export type MutationSetEnterpriseIdentityProviderArgs = {
  input: SetEnterpriseIdentityProviderInput;
};


export type MutationSubmitPullRequestReviewArgs = {
  input: SubmitPullRequestReviewInput;
};


export type MutationTransferIssueArgs = {
  input: TransferIssueInput;
};


export type MutationUnarchiveRepositoryArgs = {
  input: UnarchiveRepositoryInput;
};


export type MutationUnfollowUserArgs = {
  input: UnfollowUserInput;
};


export type MutationUnlinkRepositoryFromProjectArgs = {
  input: UnlinkRepositoryFromProjectInput;
};


export type MutationUnlockLockableArgs = {
  input: UnlockLockableInput;
};


export type MutationUnmarkIssueAsDuplicateArgs = {
  input: UnmarkIssueAsDuplicateInput;
};


export type MutationUnminimizeCommentArgs = {
  input: UnminimizeCommentInput;
};


export type MutationUnresolveReviewThreadArgs = {
  input: UnresolveReviewThreadInput;
};


export type MutationUpdateBranchProtectionRuleArgs = {
  input: UpdateBranchProtectionRuleInput;
};


export type MutationUpdateEnterpriseActionExecutionCapabilitySettingArgs = {
  input: UpdateEnterpriseActionExecutionCapabilitySettingInput;
};


export type MutationUpdateEnterpriseAdministratorRoleArgs = {
  input: UpdateEnterpriseAdministratorRoleInput;
};


export type MutationUpdateEnterpriseAllowPrivateRepositoryForkingSettingArgs = {
  input: UpdateEnterpriseAllowPrivateRepositoryForkingSettingInput;
};


export type MutationUpdateEnterpriseDefaultRepositoryPermissionSettingArgs = {
  input: UpdateEnterpriseDefaultRepositoryPermissionSettingInput;
};


export type MutationUpdateEnterpriseMembersCanChangeRepositoryVisibilitySettingArgs = {
  input: UpdateEnterpriseMembersCanChangeRepositoryVisibilitySettingInput;
};


export type MutationUpdateEnterpriseMembersCanCreateRepositoriesSettingArgs = {
  input: UpdateEnterpriseMembersCanCreateRepositoriesSettingInput;
};


export type MutationUpdateEnterpriseMembersCanDeleteIssuesSettingArgs = {
  input: UpdateEnterpriseMembersCanDeleteIssuesSettingInput;
};


export type MutationUpdateEnterpriseMembersCanDeleteRepositoriesSettingArgs = {
  input: UpdateEnterpriseMembersCanDeleteRepositoriesSettingInput;
};


export type MutationUpdateEnterpriseMembersCanInviteCollaboratorsSettingArgs = {
  input: UpdateEnterpriseMembersCanInviteCollaboratorsSettingInput;
};


export type MutationUpdateEnterpriseMembersCanMakePurchasesSettingArgs = {
  input: UpdateEnterpriseMembersCanMakePurchasesSettingInput;
};


export type MutationUpdateEnterpriseMembersCanUpdateProtectedBranchesSettingArgs = {
  input: UpdateEnterpriseMembersCanUpdateProtectedBranchesSettingInput;
};


export type MutationUpdateEnterpriseMembersCanViewDependencyInsightsSettingArgs = {
  input: UpdateEnterpriseMembersCanViewDependencyInsightsSettingInput;
};


export type MutationUpdateEnterpriseOrganizationProjectsSettingArgs = {
  input: UpdateEnterpriseOrganizationProjectsSettingInput;
};


export type MutationUpdateEnterpriseProfileArgs = {
  input: UpdateEnterpriseProfileInput;
};


export type MutationUpdateEnterpriseRepositoryProjectsSettingArgs = {
  input: UpdateEnterpriseRepositoryProjectsSettingInput;
};


export type MutationUpdateEnterpriseTeamDiscussionsSettingArgs = {
  input: UpdateEnterpriseTeamDiscussionsSettingInput;
};


export type MutationUpdateEnterpriseTwoFactorAuthenticationRequiredSettingArgs = {
  input: UpdateEnterpriseTwoFactorAuthenticationRequiredSettingInput;
};


export type MutationUpdateIpAllowListEnabledSettingArgs = {
  input: UpdateIpAllowListEnabledSettingInput;
};


export type MutationUpdateIpAllowListEntryArgs = {
  input: UpdateIpAllowListEntryInput;
};


export type MutationUpdateIssueArgs = {
  input: UpdateIssueInput;
};


export type MutationUpdateIssueCommentArgs = {
  input: UpdateIssueCommentInput;
};


export type MutationUpdateProjectArgs = {
  input: UpdateProjectInput;
};


export type MutationUpdateProjectCardArgs = {
  input: UpdateProjectCardInput;
};


export type MutationUpdateProjectColumnArgs = {
  input: UpdateProjectColumnInput;
};


export type MutationUpdatePullRequestArgs = {
  input: UpdatePullRequestInput;
};


export type MutationUpdatePullRequestReviewArgs = {
  input: UpdatePullRequestReviewInput;
};


export type MutationUpdatePullRequestReviewCommentArgs = {
  input: UpdatePullRequestReviewCommentInput;
};


export type MutationUpdateRefArgs = {
  input: UpdateRefInput;
};


export type MutationUpdateRepositoryArgs = {
  input: UpdateRepositoryInput;
};


export type MutationUpdateSubscriptionArgs = {
  input: UpdateSubscriptionInput;
};


export type MutationUpdateTeamDiscussionArgs = {
  input: UpdateTeamDiscussionInput;
};


export type MutationUpdateTeamDiscussionCommentArgs = {
  input: UpdateTeamDiscussionCommentInput;
};


export type MutationUpdateTopicsArgs = {
  input: UpdateTopicsInput;
};

export type Node = {
  id: Scalars['ID'];
};

export type OauthApplicationAuditEntryData = {
  oauthApplicationName?: Maybe<Scalars['String']>;
  oauthApplicationResourcePath?: Maybe<Scalars['URI']>;
  oauthApplicationUrl?: Maybe<Scalars['URI']>;
};

export type OauthApplicationCreateAuditEntry = Node & AuditEntry & OauthApplicationAuditEntryData & OrganizationAuditEntryData & {
   __typename?: 'OauthApplicationCreateAuditEntry';
  action: Scalars['String'];
  actor?: Maybe<AuditEntryActor>;
  actorIp?: Maybe<Scalars['String']>;
  actorLocation?: Maybe<ActorLocation>;
  actorLogin?: Maybe<Scalars['String']>;
  actorResourcePath?: Maybe<Scalars['URI']>;
  actorUrl?: Maybe<Scalars['URI']>;
  applicationUrl?: Maybe<Scalars['URI']>;
  callbackUrl?: Maybe<Scalars['URI']>;
  createdAt: Scalars['PreciseDateTime'];
  id: Scalars['ID'];
  oauthApplicationName?: Maybe<Scalars['String']>;
  oauthApplicationResourcePath?: Maybe<Scalars['URI']>;
  oauthApplicationUrl?: Maybe<Scalars['URI']>;
  operationType?: Maybe<OperationType>;
  organization?: Maybe<Organization>;
  organizationName?: Maybe<Scalars['String']>;
  organizationResourcePath?: Maybe<Scalars['URI']>;
  organizationUrl?: Maybe<Scalars['URI']>;
  rateLimit?: Maybe<Scalars['Int']>;
  state?: Maybe<OauthApplicationCreateAuditEntryState>;
  user?: Maybe<User>;
  userLogin?: Maybe<Scalars['String']>;
  userResourcePath?: Maybe<Scalars['URI']>;
  userUrl?: Maybe<Scalars['URI']>;
};

export enum OauthApplicationCreateAuditEntryState {
  Active = 'ACTIVE',
  Suspended = 'SUSPENDED',
  PendingDeletion = 'PENDING_DELETION'
}

export enum OperationType {
  Access = 'ACCESS',
  Authentication = 'AUTHENTICATION',
  Create = 'CREATE',
  Modify = 'MODIFY',
  Remove = 'REMOVE',
  Restore = 'RESTORE',
  Transfer = 'TRANSFER'
}

export enum OrderDirection {
  Asc = 'ASC',
  Desc = 'DESC'
}

export type OrgAddBillingManagerAuditEntry = Node & AuditEntry & OrganizationAuditEntryData & {
   __typename?: 'OrgAddBillingManagerAuditEntry';
  action: Scalars['String'];
  actor?: Maybe<AuditEntryActor>;
  actorIp?: Maybe<Scalars['String']>;
  actorLocation?: Maybe<ActorLocation>;
  actorLogin?: Maybe<Scalars['String']>;
  actorResourcePath?: Maybe<Scalars['URI']>;
  actorUrl?: Maybe<Scalars['URI']>;
  createdAt: Scalars['PreciseDateTime'];
  id: Scalars['ID'];
  invitationEmail?: Maybe<Scalars['String']>;
  operationType?: Maybe<OperationType>;
  organization?: Maybe<Organization>;
  organizationName?: Maybe<Scalars['String']>;
  organizationResourcePath?: Maybe<Scalars['URI']>;
  organizationUrl?: Maybe<Scalars['URI']>;
  user?: Maybe<User>;
  userLogin?: Maybe<Scalars['String']>;
  userResourcePath?: Maybe<Scalars['URI']>;
  userUrl?: Maybe<Scalars['URI']>;
};

export type OrgAddMemberAuditEntry = Node & AuditEntry & OrganizationAuditEntryData & {
   __typename?: 'OrgAddMemberAuditEntry';
  action: Scalars['String'];
  actor?: Maybe<AuditEntryActor>;
  actorIp?: Maybe<Scalars['String']>;
  actorLocation?: Maybe<ActorLocation>;
  actorLogin?: Maybe<Scalars['String']>;
  actorResourcePath?: Maybe<Scalars['URI']>;
  actorUrl?: Maybe<Scalars['URI']>;
  createdAt: Scalars['PreciseDateTime'];
  id: Scalars['ID'];
  operationType?: Maybe<OperationType>;
  organization?: Maybe<Organization>;
  organizationName?: Maybe<Scalars['String']>;
  organizationResourcePath?: Maybe<Scalars['URI']>;
  organizationUrl?: Maybe<Scalars['URI']>;
  permission?: Maybe<OrgAddMemberAuditEntryPermission>;
  user?: Maybe<User>;
  userLogin?: Maybe<Scalars['String']>;
  userResourcePath?: Maybe<Scalars['URI']>;
  userUrl?: Maybe<Scalars['URI']>;
};

export enum OrgAddMemberAuditEntryPermission {
  Read = 'READ',
  Admin = 'ADMIN'
}

export type Organization = Node & Actor & RegistryPackageOwner & RegistryPackageSearch & ProjectOwner & RepositoryOwner & UniformResourceLocatable & MemberStatusable & ProfileOwner & Sponsorable & {
   __typename?: 'Organization';
  anyPinnableItems: Scalars['Boolean'];
  auditLog: OrganizationAuditEntryConnection;
  avatarUrl: Scalars['URI'];
  createdAt: Scalars['DateTime'];
  databaseId?: Maybe<Scalars['Int']>;
  description?: Maybe<Scalars['String']>;
  descriptionHTML?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  isVerified: Scalars['Boolean'];
  itemShowcase: ProfileItemShowcase;
  location?: Maybe<Scalars['String']>;
  login: Scalars['String'];
  memberStatuses: UserStatusConnection;
  membersWithRole: OrganizationMemberConnection;
  name?: Maybe<Scalars['String']>;
  newTeamResourcePath: Scalars['URI'];
  newTeamUrl: Scalars['URI'];
  organizationBillingEmail?: Maybe<Scalars['String']>;
  pendingMembers: UserConnection;
  pinnableItems: PinnableItemConnection;
  pinnedItems: PinnableItemConnection;
  pinnedItemsRemaining: Scalars['Int'];
  /** @deprecated pinnedRepositories will be removed Use ProfileOwner.pinnedItems instead. Removal on 2019-10-01 UTC. */
  pinnedRepositories: RepositoryConnection;
  project?: Maybe<Project>;
  projects: ProjectConnection;
  projectsResourcePath: Scalars['URI'];
  projectsUrl: Scalars['URI'];
  /** @deprecated Renaming GitHub Packages fields and objects. Use the `PackageOwner` object instead. Removal on 2020-04-01 UTC. */
  registryPackages: RegistryPackageConnection;
  /** @deprecated Renaming GitHub Packages fields and objects. Use the `PackageSearch` object instead. Removal on 2020-04-01 UTC. */
  registryPackagesForQuery: RegistryPackageConnection;
  repositories: RepositoryConnection;
  repository?: Maybe<Repository>;
  requiresTwoFactorAuthentication?: Maybe<Scalars['Boolean']>;
  resourcePath: Scalars['URI'];
  samlIdentityProvider?: Maybe<OrganizationIdentityProvider>;
  sponsorsListing?: Maybe<SponsorsListing>;
  sponsorshipsAsMaintainer: SponsorshipConnection;
  sponsorshipsAsSponsor: SponsorshipConnection;
  team?: Maybe<Team>;
  teams: TeamConnection;
  teamsResourcePath: Scalars['URI'];
  teamsUrl: Scalars['URI'];
  updatedAt: Scalars['DateTime'];
  url: Scalars['URI'];
  viewerCanAdminister: Scalars['Boolean'];
  viewerCanChangePinnedItems: Scalars['Boolean'];
  viewerCanCreateProjects: Scalars['Boolean'];
  viewerCanCreateRepositories: Scalars['Boolean'];
  viewerCanCreateTeams: Scalars['Boolean'];
  viewerIsAMember: Scalars['Boolean'];
  websiteUrl?: Maybe<Scalars['URI']>;
};


export type OrganizationAnyPinnableItemsArgs = {
  type?: Maybe<PinnableItemType>;
};


export type OrganizationAuditLogArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  query?: Maybe<Scalars['String']>;
  orderBy?: Maybe<AuditLogOrder>;
};


export type OrganizationAvatarUrlArgs = {
  size?: Maybe<Scalars['Int']>;
};


export type OrganizationMemberStatusesArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<UserStatusOrder>;
};


export type OrganizationMembersWithRoleArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type OrganizationPendingMembersArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type OrganizationPinnableItemsArgs = {
  types?: Maybe<Array<PinnableItemType>>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type OrganizationPinnedItemsArgs = {
  types?: Maybe<Array<PinnableItemType>>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type OrganizationPinnedRepositoriesArgs = {
  privacy?: Maybe<RepositoryPrivacy>;
  orderBy?: Maybe<RepositoryOrder>;
  affiliations?: Maybe<Array<Maybe<RepositoryAffiliation>>>;
  ownerAffiliations?: Maybe<Array<Maybe<RepositoryAffiliation>>>;
  isLocked?: Maybe<Scalars['Boolean']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type OrganizationProjectArgs = {
  number: Scalars['Int'];
};


export type OrganizationProjectsArgs = {
  orderBy?: Maybe<ProjectOrder>;
  search?: Maybe<Scalars['String']>;
  states?: Maybe<Array<ProjectState>>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type OrganizationRegistryPackagesArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  names?: Maybe<Array<Maybe<Scalars['String']>>>;
  repositoryId?: Maybe<Scalars['ID']>;
  packageType?: Maybe<RegistryPackageType>;
  registryPackageType?: Maybe<Scalars['String']>;
  publicOnly?: Maybe<Scalars['Boolean']>;
};


export type OrganizationRegistryPackagesForQueryArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  query?: Maybe<Scalars['String']>;
  packageType?: Maybe<RegistryPackageType>;
};


export type OrganizationRepositoriesArgs = {
  privacy?: Maybe<RepositoryPrivacy>;
  orderBy?: Maybe<RepositoryOrder>;
  affiliations?: Maybe<Array<Maybe<RepositoryAffiliation>>>;
  ownerAffiliations?: Maybe<Array<Maybe<RepositoryAffiliation>>>;
  isLocked?: Maybe<Scalars['Boolean']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  isFork?: Maybe<Scalars['Boolean']>;
};


export type OrganizationRepositoryArgs = {
  name: Scalars['String'];
};


export type OrganizationSponsorshipsAsMaintainerArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  includePrivate?: Maybe<Scalars['Boolean']>;
  orderBy?: Maybe<SponsorshipOrder>;
};


export type OrganizationSponsorshipsAsSponsorArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<SponsorshipOrder>;
};


export type OrganizationTeamArgs = {
  slug: Scalars['String'];
};


export type OrganizationTeamsArgs = {
  privacy?: Maybe<TeamPrivacy>;
  role?: Maybe<TeamRole>;
  query?: Maybe<Scalars['String']>;
  userLogins?: Maybe<Array<Scalars['String']>>;
  orderBy?: Maybe<TeamOrder>;
  ldapMapped?: Maybe<Scalars['Boolean']>;
  rootTeamsOnly?: Maybe<Scalars['Boolean']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};

export type OrganizationAuditEntry = MembersCanDeleteReposClearAuditEntry | MembersCanDeleteReposDisableAuditEntry | MembersCanDeleteReposEnableAuditEntry | OauthApplicationCreateAuditEntry | OrgAddBillingManagerAuditEntry | OrgAddMemberAuditEntry | OrgBlockUserAuditEntry | OrgConfigDisableCollaboratorsOnlyAuditEntry | OrgConfigEnableCollaboratorsOnlyAuditEntry | OrgCreateAuditEntry | OrgDisableOauthAppRestrictionsAuditEntry | OrgDisableSamlAuditEntry | OrgDisableTwoFactorRequirementAuditEntry | OrgEnableOauthAppRestrictionsAuditEntry | OrgEnableSamlAuditEntry | OrgEnableTwoFactorRequirementAuditEntry | OrgInviteMemberAuditEntry | OrgInviteToBusinessAuditEntry | OrgOauthAppAccessApprovedAuditEntry | OrgOauthAppAccessDeniedAuditEntry | OrgOauthAppAccessRequestedAuditEntry | OrgRemoveBillingManagerAuditEntry | OrgRemoveMemberAuditEntry | OrgRemoveOutsideCollaboratorAuditEntry | OrgRestoreMemberAuditEntry | OrgUnblockUserAuditEntry | OrgUpdateDefaultRepositoryPermissionAuditEntry | OrgUpdateMemberAuditEntry | OrgUpdateMemberRepositoryCreationPermissionAuditEntry | OrgUpdateMemberRepositoryInvitationPermissionAuditEntry | PrivateRepositoryForkingDisableAuditEntry | PrivateRepositoryForkingEnableAuditEntry | RepoAccessAuditEntry | RepoAddMemberAuditEntry | RepoAddTopicAuditEntry | RepoArchivedAuditEntry | RepoChangeMergeSettingAuditEntry | RepoConfigDisableAnonymousGitAccessAuditEntry | RepoConfigDisableCollaboratorsOnlyAuditEntry | RepoConfigDisableContributorsOnlyAuditEntry | RepoConfigDisableSockpuppetDisallowedAuditEntry | RepoConfigEnableAnonymousGitAccessAuditEntry | RepoConfigEnableCollaboratorsOnlyAuditEntry | RepoConfigEnableContributorsOnlyAuditEntry | RepoConfigEnableSockpuppetDisallowedAuditEntry | RepoConfigLockAnonymousGitAccessAuditEntry | RepoConfigUnlockAnonymousGitAccessAuditEntry | RepoCreateAuditEntry | RepoDestroyAuditEntry | RepoRemoveMemberAuditEntry | RepoRemoveTopicAuditEntry | RepositoryVisibilityChangeDisableAuditEntry | RepositoryVisibilityChangeEnableAuditEntry | TeamAddMemberAuditEntry | TeamAddRepositoryAuditEntry | TeamChangeParentTeamAuditEntry | TeamRemoveMemberAuditEntry | TeamRemoveRepositoryAuditEntry;

export type OrganizationAuditEntryConnection = {
   __typename?: 'OrganizationAuditEntryConnection';
  edges?: Maybe<Array<Maybe<OrganizationAuditEntryEdge>>>;
  nodes?: Maybe<Array<Maybe<OrganizationAuditEntry>>>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type OrganizationAuditEntryData = {
  organization?: Maybe<Organization>;
  organizationName?: Maybe<Scalars['String']>;
  organizationResourcePath?: Maybe<Scalars['URI']>;
  organizationUrl?: Maybe<Scalars['URI']>;
};

export type OrganizationAuditEntryEdge = {
   __typename?: 'OrganizationAuditEntryEdge';
  cursor: Scalars['String'];
  node?: Maybe<OrganizationAuditEntry>;
};

export type OrganizationConnection = {
   __typename?: 'OrganizationConnection';
  edges?: Maybe<Array<Maybe<OrganizationEdge>>>;
  nodes?: Maybe<Array<Maybe<Organization>>>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type OrganizationEdge = {
   __typename?: 'OrganizationEdge';
  cursor: Scalars['String'];
  node?: Maybe<Organization>;
};

export type OrganizationIdentityProvider = Node & {
   __typename?: 'OrganizationIdentityProvider';
  digestMethod?: Maybe<Scalars['URI']>;
  externalIdentities: ExternalIdentityConnection;
  id: Scalars['ID'];
  idpCertificate?: Maybe<Scalars['X509Certificate']>;
  issuer?: Maybe<Scalars['String']>;
  organization?: Maybe<Organization>;
  signatureMethod?: Maybe<Scalars['URI']>;
  ssoUrl?: Maybe<Scalars['URI']>;
};


export type OrganizationIdentityProviderExternalIdentitiesArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};

export type OrganizationInvitation = Node & {
   __typename?: 'OrganizationInvitation';
  createdAt: Scalars['DateTime'];
  email?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  invitationType: OrganizationInvitationType;
  invitee?: Maybe<User>;
  inviter: User;
  organization: Organization;
  role: OrganizationInvitationRole;
};

export type OrganizationInvitationConnection = {
   __typename?: 'OrganizationInvitationConnection';
  edges?: Maybe<Array<Maybe<OrganizationInvitationEdge>>>;
  nodes?: Maybe<Array<Maybe<OrganizationInvitation>>>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type OrganizationInvitationEdge = {
   __typename?: 'OrganizationInvitationEdge';
  cursor: Scalars['String'];
  node?: Maybe<OrganizationInvitation>;
};

export enum OrganizationInvitationRole {
  DirectMember = 'DIRECT_MEMBER',
  Admin = 'ADMIN',
  BillingManager = 'BILLING_MANAGER',
  Reinstate = 'REINSTATE'
}

export enum OrganizationInvitationType {
  User = 'USER',
  Email = 'EMAIL'
}

export type OrganizationMemberConnection = {
   __typename?: 'OrganizationMemberConnection';
  edges?: Maybe<Array<Maybe<OrganizationMemberEdge>>>;
  nodes?: Maybe<Array<Maybe<User>>>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type OrganizationMemberEdge = {
   __typename?: 'OrganizationMemberEdge';
  cursor: Scalars['String'];
  hasTwoFactorEnabled?: Maybe<Scalars['Boolean']>;
  node?: Maybe<User>;
  role?: Maybe<OrganizationMemberRole>;
};

export enum OrganizationMemberRole {
  Member = 'MEMBER',
  Admin = 'ADMIN'
}

export enum OrganizationMembersCanCreateRepositoriesSettingValue {
  All = 'ALL',
  Private = 'PRIVATE',
  Disabled = 'DISABLED'
}

export type OrganizationOrder = {
  field: OrganizationOrderField;
  direction: OrderDirection;
};

export enum OrganizationOrderField {
  CreatedAt = 'CREATED_AT',
  Login = 'LOGIN'
}

export type OrganizationsHovercardContext = HovercardContext & {
   __typename?: 'OrganizationsHovercardContext';
  message: Scalars['String'];
  octicon: Scalars['String'];
  relevantOrganizations: OrganizationConnection;
  totalOrganizationCount: Scalars['Int'];
};


export type OrganizationsHovercardContextRelevantOrganizationsArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};

export type OrganizationTeamsHovercardContext = HovercardContext & {
   __typename?: 'OrganizationTeamsHovercardContext';
  message: Scalars['String'];
  octicon: Scalars['String'];
  relevantTeams: TeamConnection;
  teamsResourcePath: Scalars['URI'];
  teamsUrl: Scalars['URI'];
  totalTeamCount: Scalars['Int'];
};


export type OrganizationTeamsHovercardContextRelevantTeamsArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};

export type OrgBlockUserAuditEntry = Node & AuditEntry & OrganizationAuditEntryData & {
   __typename?: 'OrgBlockUserAuditEntry';
  action: Scalars['String'];
  actor?: Maybe<AuditEntryActor>;
  actorIp?: Maybe<Scalars['String']>;
  actorLocation?: Maybe<ActorLocation>;
  actorLogin?: Maybe<Scalars['String']>;
  actorResourcePath?: Maybe<Scalars['URI']>;
  actorUrl?: Maybe<Scalars['URI']>;
  blockedUser?: Maybe<User>;
  blockedUserName?: Maybe<Scalars['String']>;
  blockedUserResourcePath?: Maybe<Scalars['URI']>;
  blockedUserUrl?: Maybe<Scalars['URI']>;
  createdAt: Scalars['PreciseDateTime'];
  id: Scalars['ID'];
  operationType?: Maybe<OperationType>;
  organization?: Maybe<Organization>;
  organizationName?: Maybe<Scalars['String']>;
  organizationResourcePath?: Maybe<Scalars['URI']>;
  organizationUrl?: Maybe<Scalars['URI']>;
  user?: Maybe<User>;
  userLogin?: Maybe<Scalars['String']>;
  userResourcePath?: Maybe<Scalars['URI']>;
  userUrl?: Maybe<Scalars['URI']>;
};

export type OrgConfigDisableCollaboratorsOnlyAuditEntry = Node & AuditEntry & OrganizationAuditEntryData & {
   __typename?: 'OrgConfigDisableCollaboratorsOnlyAuditEntry';
  action: Scalars['String'];
  actor?: Maybe<AuditEntryActor>;
  actorIp?: Maybe<Scalars['String']>;
  actorLocation?: Maybe<ActorLocation>;
  actorLogin?: Maybe<Scalars['String']>;
  actorResourcePath?: Maybe<Scalars['URI']>;
  actorUrl?: Maybe<Scalars['URI']>;
  createdAt: Scalars['PreciseDateTime'];
  id: Scalars['ID'];
  operationType?: Maybe<OperationType>;
  organization?: Maybe<Organization>;
  organizationName?: Maybe<Scalars['String']>;
  organizationResourcePath?: Maybe<Scalars['URI']>;
  organizationUrl?: Maybe<Scalars['URI']>;
  user?: Maybe<User>;
  userLogin?: Maybe<Scalars['String']>;
  userResourcePath?: Maybe<Scalars['URI']>;
  userUrl?: Maybe<Scalars['URI']>;
};

export type OrgConfigEnableCollaboratorsOnlyAuditEntry = Node & AuditEntry & OrganizationAuditEntryData & {
   __typename?: 'OrgConfigEnableCollaboratorsOnlyAuditEntry';
  action: Scalars['String'];
  actor?: Maybe<AuditEntryActor>;
  actorIp?: Maybe<Scalars['String']>;
  actorLocation?: Maybe<ActorLocation>;
  actorLogin?: Maybe<Scalars['String']>;
  actorResourcePath?: Maybe<Scalars['URI']>;
  actorUrl?: Maybe<Scalars['URI']>;
  createdAt: Scalars['PreciseDateTime'];
  id: Scalars['ID'];
  operationType?: Maybe<OperationType>;
  organization?: Maybe<Organization>;
  organizationName?: Maybe<Scalars['String']>;
  organizationResourcePath?: Maybe<Scalars['URI']>;
  organizationUrl?: Maybe<Scalars['URI']>;
  user?: Maybe<User>;
  userLogin?: Maybe<Scalars['String']>;
  userResourcePath?: Maybe<Scalars['URI']>;
  userUrl?: Maybe<Scalars['URI']>;
};

export type OrgCreateAuditEntry = Node & AuditEntry & OrganizationAuditEntryData & {
   __typename?: 'OrgCreateAuditEntry';
  action: Scalars['String'];
  actor?: Maybe<AuditEntryActor>;
  actorIp?: Maybe<Scalars['String']>;
  actorLocation?: Maybe<ActorLocation>;
  actorLogin?: Maybe<Scalars['String']>;
  actorResourcePath?: Maybe<Scalars['URI']>;
  actorUrl?: Maybe<Scalars['URI']>;
  billingPlan?: Maybe<OrgCreateAuditEntryBillingPlan>;
  createdAt: Scalars['PreciseDateTime'];
  id: Scalars['ID'];
  operationType?: Maybe<OperationType>;
  organization?: Maybe<Organization>;
  organizationName?: Maybe<Scalars['String']>;
  organizationResourcePath?: Maybe<Scalars['URI']>;
  organizationUrl?: Maybe<Scalars['URI']>;
  user?: Maybe<User>;
  userLogin?: Maybe<Scalars['String']>;
  userResourcePath?: Maybe<Scalars['URI']>;
  userUrl?: Maybe<Scalars['URI']>;
};

export enum OrgCreateAuditEntryBillingPlan {
  Free = 'FREE',
  Business = 'BUSINESS',
  BusinessPlus = 'BUSINESS_PLUS',
  Unlimited = 'UNLIMITED',
  TieredPerSeat = 'TIERED_PER_SEAT'
}

export type OrgDisableOauthAppRestrictionsAuditEntry = Node & AuditEntry & OrganizationAuditEntryData & {
   __typename?: 'OrgDisableOauthAppRestrictionsAuditEntry';
  action: Scalars['String'];
  actor?: Maybe<AuditEntryActor>;
  actorIp?: Maybe<Scalars['String']>;
  actorLocation?: Maybe<ActorLocation>;
  actorLogin?: Maybe<Scalars['String']>;
  actorResourcePath?: Maybe<Scalars['URI']>;
  actorUrl?: Maybe<Scalars['URI']>;
  createdAt: Scalars['PreciseDateTime'];
  id: Scalars['ID'];
  operationType?: Maybe<OperationType>;
  organization?: Maybe<Organization>;
  organizationName?: Maybe<Scalars['String']>;
  organizationResourcePath?: Maybe<Scalars['URI']>;
  organizationUrl?: Maybe<Scalars['URI']>;
  user?: Maybe<User>;
  userLogin?: Maybe<Scalars['String']>;
  userResourcePath?: Maybe<Scalars['URI']>;
  userUrl?: Maybe<Scalars['URI']>;
};

export type OrgDisableSamlAuditEntry = Node & AuditEntry & OrganizationAuditEntryData & {
   __typename?: 'OrgDisableSamlAuditEntry';
  action: Scalars['String'];
  actor?: Maybe<AuditEntryActor>;
  actorIp?: Maybe<Scalars['String']>;
  actorLocation?: Maybe<ActorLocation>;
  actorLogin?: Maybe<Scalars['String']>;
  actorResourcePath?: Maybe<Scalars['URI']>;
  actorUrl?: Maybe<Scalars['URI']>;
  createdAt: Scalars['PreciseDateTime'];
  digestMethodUrl?: Maybe<Scalars['URI']>;
  id: Scalars['ID'];
  issuerUrl?: Maybe<Scalars['URI']>;
  operationType?: Maybe<OperationType>;
  organization?: Maybe<Organization>;
  organizationName?: Maybe<Scalars['String']>;
  organizationResourcePath?: Maybe<Scalars['URI']>;
  organizationUrl?: Maybe<Scalars['URI']>;
  signatureMethodUrl?: Maybe<Scalars['URI']>;
  singleSignOnUrl?: Maybe<Scalars['URI']>;
  user?: Maybe<User>;
  userLogin?: Maybe<Scalars['String']>;
  userResourcePath?: Maybe<Scalars['URI']>;
  userUrl?: Maybe<Scalars['URI']>;
};

export type OrgDisableTwoFactorRequirementAuditEntry = Node & AuditEntry & OrganizationAuditEntryData & {
   __typename?: 'OrgDisableTwoFactorRequirementAuditEntry';
  action: Scalars['String'];
  actor?: Maybe<AuditEntryActor>;
  actorIp?: Maybe<Scalars['String']>;
  actorLocation?: Maybe<ActorLocation>;
  actorLogin?: Maybe<Scalars['String']>;
  actorResourcePath?: Maybe<Scalars['URI']>;
  actorUrl?: Maybe<Scalars['URI']>;
  createdAt: Scalars['PreciseDateTime'];
  id: Scalars['ID'];
  operationType?: Maybe<OperationType>;
  organization?: Maybe<Organization>;
  organizationName?: Maybe<Scalars['String']>;
  organizationResourcePath?: Maybe<Scalars['URI']>;
  organizationUrl?: Maybe<Scalars['URI']>;
  user?: Maybe<User>;
  userLogin?: Maybe<Scalars['String']>;
  userResourcePath?: Maybe<Scalars['URI']>;
  userUrl?: Maybe<Scalars['URI']>;
};

export type OrgEnableOauthAppRestrictionsAuditEntry = Node & AuditEntry & OrganizationAuditEntryData & {
   __typename?: 'OrgEnableOauthAppRestrictionsAuditEntry';
  action: Scalars['String'];
  actor?: Maybe<AuditEntryActor>;
  actorIp?: Maybe<Scalars['String']>;
  actorLocation?: Maybe<ActorLocation>;
  actorLogin?: Maybe<Scalars['String']>;
  actorResourcePath?: Maybe<Scalars['URI']>;
  actorUrl?: Maybe<Scalars['URI']>;
  createdAt: Scalars['PreciseDateTime'];
  id: Scalars['ID'];
  operationType?: Maybe<OperationType>;
  organization?: Maybe<Organization>;
  organizationName?: Maybe<Scalars['String']>;
  organizationResourcePath?: Maybe<Scalars['URI']>;
  organizationUrl?: Maybe<Scalars['URI']>;
  user?: Maybe<User>;
  userLogin?: Maybe<Scalars['String']>;
  userResourcePath?: Maybe<Scalars['URI']>;
  userUrl?: Maybe<Scalars['URI']>;
};

export type OrgEnableSamlAuditEntry = Node & AuditEntry & OrganizationAuditEntryData & {
   __typename?: 'OrgEnableSamlAuditEntry';
  action: Scalars['String'];
  actor?: Maybe<AuditEntryActor>;
  actorIp?: Maybe<Scalars['String']>;
  actorLocation?: Maybe<ActorLocation>;
  actorLogin?: Maybe<Scalars['String']>;
  actorResourcePath?: Maybe<Scalars['URI']>;
  actorUrl?: Maybe<Scalars['URI']>;
  createdAt: Scalars['PreciseDateTime'];
  digestMethodUrl?: Maybe<Scalars['URI']>;
  id: Scalars['ID'];
  issuerUrl?: Maybe<Scalars['URI']>;
  operationType?: Maybe<OperationType>;
  organization?: Maybe<Organization>;
  organizationName?: Maybe<Scalars['String']>;
  organizationResourcePath?: Maybe<Scalars['URI']>;
  organizationUrl?: Maybe<Scalars['URI']>;
  signatureMethodUrl?: Maybe<Scalars['URI']>;
  singleSignOnUrl?: Maybe<Scalars['URI']>;
  user?: Maybe<User>;
  userLogin?: Maybe<Scalars['String']>;
  userResourcePath?: Maybe<Scalars['URI']>;
  userUrl?: Maybe<Scalars['URI']>;
};

export type OrgEnableTwoFactorRequirementAuditEntry = Node & AuditEntry & OrganizationAuditEntryData & {
   __typename?: 'OrgEnableTwoFactorRequirementAuditEntry';
  action: Scalars['String'];
  actor?: Maybe<AuditEntryActor>;
  actorIp?: Maybe<Scalars['String']>;
  actorLocation?: Maybe<ActorLocation>;
  actorLogin?: Maybe<Scalars['String']>;
  actorResourcePath?: Maybe<Scalars['URI']>;
  actorUrl?: Maybe<Scalars['URI']>;
  createdAt: Scalars['PreciseDateTime'];
  id: Scalars['ID'];
  operationType?: Maybe<OperationType>;
  organization?: Maybe<Organization>;
  organizationName?: Maybe<Scalars['String']>;
  organizationResourcePath?: Maybe<Scalars['URI']>;
  organizationUrl?: Maybe<Scalars['URI']>;
  user?: Maybe<User>;
  userLogin?: Maybe<Scalars['String']>;
  userResourcePath?: Maybe<Scalars['URI']>;
  userUrl?: Maybe<Scalars['URI']>;
};

export type OrgInviteMemberAuditEntry = Node & AuditEntry & OrganizationAuditEntryData & {
   __typename?: 'OrgInviteMemberAuditEntry';
  action: Scalars['String'];
  actor?: Maybe<AuditEntryActor>;
  actorIp?: Maybe<Scalars['String']>;
  actorLocation?: Maybe<ActorLocation>;
  actorLogin?: Maybe<Scalars['String']>;
  actorResourcePath?: Maybe<Scalars['URI']>;
  actorUrl?: Maybe<Scalars['URI']>;
  createdAt: Scalars['PreciseDateTime'];
  email?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  operationType?: Maybe<OperationType>;
  organization?: Maybe<Organization>;
  organizationInvitation?: Maybe<OrganizationInvitation>;
  organizationName?: Maybe<Scalars['String']>;
  organizationResourcePath?: Maybe<Scalars['URI']>;
  organizationUrl?: Maybe<Scalars['URI']>;
  user?: Maybe<User>;
  userLogin?: Maybe<Scalars['String']>;
  userResourcePath?: Maybe<Scalars['URI']>;
  userUrl?: Maybe<Scalars['URI']>;
};

export type OrgInviteToBusinessAuditEntry = Node & AuditEntry & EnterpriseAuditEntryData & OrganizationAuditEntryData & {
   __typename?: 'OrgInviteToBusinessAuditEntry';
  action: Scalars['String'];
  actor?: Maybe<AuditEntryActor>;
  actorIp?: Maybe<Scalars['String']>;
  actorLocation?: Maybe<ActorLocation>;
  actorLogin?: Maybe<Scalars['String']>;
  actorResourcePath?: Maybe<Scalars['URI']>;
  actorUrl?: Maybe<Scalars['URI']>;
  createdAt: Scalars['PreciseDateTime'];
  enterpriseResourcePath?: Maybe<Scalars['URI']>;
  enterpriseSlug?: Maybe<Scalars['String']>;
  enterpriseUrl?: Maybe<Scalars['URI']>;
  id: Scalars['ID'];
  operationType?: Maybe<OperationType>;
  organization?: Maybe<Organization>;
  organizationName?: Maybe<Scalars['String']>;
  organizationResourcePath?: Maybe<Scalars['URI']>;
  organizationUrl?: Maybe<Scalars['URI']>;
  user?: Maybe<User>;
  userLogin?: Maybe<Scalars['String']>;
  userResourcePath?: Maybe<Scalars['URI']>;
  userUrl?: Maybe<Scalars['URI']>;
};

export type OrgOauthAppAccessApprovedAuditEntry = Node & AuditEntry & OauthApplicationAuditEntryData & OrganizationAuditEntryData & {
   __typename?: 'OrgOauthAppAccessApprovedAuditEntry';
  action: Scalars['String'];
  actor?: Maybe<AuditEntryActor>;
  actorIp?: Maybe<Scalars['String']>;
  actorLocation?: Maybe<ActorLocation>;
  actorLogin?: Maybe<Scalars['String']>;
  actorResourcePath?: Maybe<Scalars['URI']>;
  actorUrl?: Maybe<Scalars['URI']>;
  createdAt: Scalars['PreciseDateTime'];
  id: Scalars['ID'];
  oauthApplicationName?: Maybe<Scalars['String']>;
  oauthApplicationResourcePath?: Maybe<Scalars['URI']>;
  oauthApplicationUrl?: Maybe<Scalars['URI']>;
  operationType?: Maybe<OperationType>;
  organization?: Maybe<Organization>;
  organizationName?: Maybe<Scalars['String']>;
  organizationResourcePath?: Maybe<Scalars['URI']>;
  organizationUrl?: Maybe<Scalars['URI']>;
  user?: Maybe<User>;
  userLogin?: Maybe<Scalars['String']>;
  userResourcePath?: Maybe<Scalars['URI']>;
  userUrl?: Maybe<Scalars['URI']>;
};

export type OrgOauthAppAccessDeniedAuditEntry = Node & AuditEntry & OauthApplicationAuditEntryData & OrganizationAuditEntryData & {
   __typename?: 'OrgOauthAppAccessDeniedAuditEntry';
  action: Scalars['String'];
  actor?: Maybe<AuditEntryActor>;
  actorIp?: Maybe<Scalars['String']>;
  actorLocation?: Maybe<ActorLocation>;
  actorLogin?: Maybe<Scalars['String']>;
  actorResourcePath?: Maybe<Scalars['URI']>;
  actorUrl?: Maybe<Scalars['URI']>;
  createdAt: Scalars['PreciseDateTime'];
  id: Scalars['ID'];
  oauthApplicationName?: Maybe<Scalars['String']>;
  oauthApplicationResourcePath?: Maybe<Scalars['URI']>;
  oauthApplicationUrl?: Maybe<Scalars['URI']>;
  operationType?: Maybe<OperationType>;
  organization?: Maybe<Organization>;
  organizationName?: Maybe<Scalars['String']>;
  organizationResourcePath?: Maybe<Scalars['URI']>;
  organizationUrl?: Maybe<Scalars['URI']>;
  user?: Maybe<User>;
  userLogin?: Maybe<Scalars['String']>;
  userResourcePath?: Maybe<Scalars['URI']>;
  userUrl?: Maybe<Scalars['URI']>;
};

export type OrgOauthAppAccessRequestedAuditEntry = Node & AuditEntry & OauthApplicationAuditEntryData & OrganizationAuditEntryData & {
   __typename?: 'OrgOauthAppAccessRequestedAuditEntry';
  action: Scalars['String'];
  actor?: Maybe<AuditEntryActor>;
  actorIp?: Maybe<Scalars['String']>;
  actorLocation?: Maybe<ActorLocation>;
  actorLogin?: Maybe<Scalars['String']>;
  actorResourcePath?: Maybe<Scalars['URI']>;
  actorUrl?: Maybe<Scalars['URI']>;
  createdAt: Scalars['PreciseDateTime'];
  id: Scalars['ID'];
  oauthApplicationName?: Maybe<Scalars['String']>;
  oauthApplicationResourcePath?: Maybe<Scalars['URI']>;
  oauthApplicationUrl?: Maybe<Scalars['URI']>;
  operationType?: Maybe<OperationType>;
  organization?: Maybe<Organization>;
  organizationName?: Maybe<Scalars['String']>;
  organizationResourcePath?: Maybe<Scalars['URI']>;
  organizationUrl?: Maybe<Scalars['URI']>;
  user?: Maybe<User>;
  userLogin?: Maybe<Scalars['String']>;
  userResourcePath?: Maybe<Scalars['URI']>;
  userUrl?: Maybe<Scalars['URI']>;
};

export type OrgRemoveBillingManagerAuditEntry = Node & AuditEntry & OrganizationAuditEntryData & {
   __typename?: 'OrgRemoveBillingManagerAuditEntry';
  action: Scalars['String'];
  actor?: Maybe<AuditEntryActor>;
  actorIp?: Maybe<Scalars['String']>;
  actorLocation?: Maybe<ActorLocation>;
  actorLogin?: Maybe<Scalars['String']>;
  actorResourcePath?: Maybe<Scalars['URI']>;
  actorUrl?: Maybe<Scalars['URI']>;
  createdAt: Scalars['PreciseDateTime'];
  id: Scalars['ID'];
  operationType?: Maybe<OperationType>;
  organization?: Maybe<Organization>;
  organizationName?: Maybe<Scalars['String']>;
  organizationResourcePath?: Maybe<Scalars['URI']>;
  organizationUrl?: Maybe<Scalars['URI']>;
  reason?: Maybe<OrgRemoveBillingManagerAuditEntryReason>;
  user?: Maybe<User>;
  userLogin?: Maybe<Scalars['String']>;
  userResourcePath?: Maybe<Scalars['URI']>;
  userUrl?: Maybe<Scalars['URI']>;
};

export enum OrgRemoveBillingManagerAuditEntryReason {
  TwoFactorRequirementNonCompliance = 'TWO_FACTOR_REQUIREMENT_NON_COMPLIANCE',
  SamlExternalIdentityMissing = 'SAML_EXTERNAL_IDENTITY_MISSING',
  SamlSsoEnforcementRequiresExternalIdentity = 'SAML_SSO_ENFORCEMENT_REQUIRES_EXTERNAL_IDENTITY'
}

export type OrgRemoveMemberAuditEntry = Node & AuditEntry & OrganizationAuditEntryData & {
   __typename?: 'OrgRemoveMemberAuditEntry';
  action: Scalars['String'];
  actor?: Maybe<AuditEntryActor>;
  actorIp?: Maybe<Scalars['String']>;
  actorLocation?: Maybe<ActorLocation>;
  actorLogin?: Maybe<Scalars['String']>;
  actorResourcePath?: Maybe<Scalars['URI']>;
  actorUrl?: Maybe<Scalars['URI']>;
  createdAt: Scalars['PreciseDateTime'];
  id: Scalars['ID'];
  membershipTypes?: Maybe<Array<OrgRemoveMemberAuditEntryMembershipType>>;
  operationType?: Maybe<OperationType>;
  organization?: Maybe<Organization>;
  organizationName?: Maybe<Scalars['String']>;
  organizationResourcePath?: Maybe<Scalars['URI']>;
  organizationUrl?: Maybe<Scalars['URI']>;
  reason?: Maybe<OrgRemoveMemberAuditEntryReason>;
  user?: Maybe<User>;
  userLogin?: Maybe<Scalars['String']>;
  userResourcePath?: Maybe<Scalars['URI']>;
  userUrl?: Maybe<Scalars['URI']>;
};

export enum OrgRemoveMemberAuditEntryMembershipType {
  DirectMember = 'DIRECT_MEMBER',
  Admin = 'ADMIN',
  BillingManager = 'BILLING_MANAGER',
  Unaffiliated = 'UNAFFILIATED',
  OutsideCollaborator = 'OUTSIDE_COLLABORATOR'
}

export enum OrgRemoveMemberAuditEntryReason {
  TwoFactorRequirementNonCompliance = 'TWO_FACTOR_REQUIREMENT_NON_COMPLIANCE',
  SamlExternalIdentityMissing = 'SAML_EXTERNAL_IDENTITY_MISSING',
  SamlSsoEnforcementRequiresExternalIdentity = 'SAML_SSO_ENFORCEMENT_REQUIRES_EXTERNAL_IDENTITY'
}

export type OrgRemoveOutsideCollaboratorAuditEntry = Node & AuditEntry & OrganizationAuditEntryData & {
   __typename?: 'OrgRemoveOutsideCollaboratorAuditEntry';
  action: Scalars['String'];
  actor?: Maybe<AuditEntryActor>;
  actorIp?: Maybe<Scalars['String']>;
  actorLocation?: Maybe<ActorLocation>;
  actorLogin?: Maybe<Scalars['String']>;
  actorResourcePath?: Maybe<Scalars['URI']>;
  actorUrl?: Maybe<Scalars['URI']>;
  createdAt: Scalars['PreciseDateTime'];
  id: Scalars['ID'];
  membershipTypes?: Maybe<Array<OrgRemoveOutsideCollaboratorAuditEntryMembershipType>>;
  operationType?: Maybe<OperationType>;
  organization?: Maybe<Organization>;
  organizationName?: Maybe<Scalars['String']>;
  organizationResourcePath?: Maybe<Scalars['URI']>;
  organizationUrl?: Maybe<Scalars['URI']>;
  reason?: Maybe<OrgRemoveOutsideCollaboratorAuditEntryReason>;
  user?: Maybe<User>;
  userLogin?: Maybe<Scalars['String']>;
  userResourcePath?: Maybe<Scalars['URI']>;
  userUrl?: Maybe<Scalars['URI']>;
};

export enum OrgRemoveOutsideCollaboratorAuditEntryMembershipType {
  OutsideCollaborator = 'OUTSIDE_COLLABORATOR',
  Unaffiliated = 'UNAFFILIATED',
  BillingManager = 'BILLING_MANAGER'
}

export enum OrgRemoveOutsideCollaboratorAuditEntryReason {
  TwoFactorRequirementNonCompliance = 'TWO_FACTOR_REQUIREMENT_NON_COMPLIANCE',
  SamlExternalIdentityMissing = 'SAML_EXTERNAL_IDENTITY_MISSING'
}

export type OrgRestoreMemberAuditEntry = Node & AuditEntry & OrganizationAuditEntryData & {
   __typename?: 'OrgRestoreMemberAuditEntry';
  action: Scalars['String'];
  actor?: Maybe<AuditEntryActor>;
  actorIp?: Maybe<Scalars['String']>;
  actorLocation?: Maybe<ActorLocation>;
  actorLogin?: Maybe<Scalars['String']>;
  actorResourcePath?: Maybe<Scalars['URI']>;
  actorUrl?: Maybe<Scalars['URI']>;
  createdAt: Scalars['PreciseDateTime'];
  id: Scalars['ID'];
  operationType?: Maybe<OperationType>;
  organization?: Maybe<Organization>;
  organizationName?: Maybe<Scalars['String']>;
  organizationResourcePath?: Maybe<Scalars['URI']>;
  organizationUrl?: Maybe<Scalars['URI']>;
  restoredCustomEmailRoutingsCount?: Maybe<Scalars['Int']>;
  restoredIssueAssignmentsCount?: Maybe<Scalars['Int']>;
  restoredMemberships?: Maybe<Array<OrgRestoreMemberAuditEntryMembership>>;
  restoredMembershipsCount?: Maybe<Scalars['Int']>;
  restoredRepositoriesCount?: Maybe<Scalars['Int']>;
  restoredRepositoryStarsCount?: Maybe<Scalars['Int']>;
  restoredRepositoryWatchesCount?: Maybe<Scalars['Int']>;
  user?: Maybe<User>;
  userLogin?: Maybe<Scalars['String']>;
  userResourcePath?: Maybe<Scalars['URI']>;
  userUrl?: Maybe<Scalars['URI']>;
};

export type OrgRestoreMemberAuditEntryMembership = OrgRestoreMemberMembershipOrganizationAuditEntryData | OrgRestoreMemberMembershipRepositoryAuditEntryData | OrgRestoreMemberMembershipTeamAuditEntryData;

export type OrgRestoreMemberMembershipOrganizationAuditEntryData = OrganizationAuditEntryData & {
   __typename?: 'OrgRestoreMemberMembershipOrganizationAuditEntryData';
  organization?: Maybe<Organization>;
  organizationName?: Maybe<Scalars['String']>;
  organizationResourcePath?: Maybe<Scalars['URI']>;
  organizationUrl?: Maybe<Scalars['URI']>;
};

export type OrgRestoreMemberMembershipRepositoryAuditEntryData = RepositoryAuditEntryData & {
   __typename?: 'OrgRestoreMemberMembershipRepositoryAuditEntryData';
  repository?: Maybe<Repository>;
  repositoryName?: Maybe<Scalars['String']>;
  repositoryResourcePath?: Maybe<Scalars['URI']>;
  repositoryUrl?: Maybe<Scalars['URI']>;
};

export type OrgRestoreMemberMembershipTeamAuditEntryData = TeamAuditEntryData & {
   __typename?: 'OrgRestoreMemberMembershipTeamAuditEntryData';
  team?: Maybe<Team>;
  teamName?: Maybe<Scalars['String']>;
  teamResourcePath?: Maybe<Scalars['URI']>;
  teamUrl?: Maybe<Scalars['URI']>;
};

export type OrgUnblockUserAuditEntry = Node & AuditEntry & OrganizationAuditEntryData & {
   __typename?: 'OrgUnblockUserAuditEntry';
  action: Scalars['String'];
  actor?: Maybe<AuditEntryActor>;
  actorIp?: Maybe<Scalars['String']>;
  actorLocation?: Maybe<ActorLocation>;
  actorLogin?: Maybe<Scalars['String']>;
  actorResourcePath?: Maybe<Scalars['URI']>;
  actorUrl?: Maybe<Scalars['URI']>;
  blockedUser?: Maybe<User>;
  blockedUserName?: Maybe<Scalars['String']>;
  blockedUserResourcePath?: Maybe<Scalars['URI']>;
  blockedUserUrl?: Maybe<Scalars['URI']>;
  createdAt: Scalars['PreciseDateTime'];
  id: Scalars['ID'];
  operationType?: Maybe<OperationType>;
  organization?: Maybe<Organization>;
  organizationName?: Maybe<Scalars['String']>;
  organizationResourcePath?: Maybe<Scalars['URI']>;
  organizationUrl?: Maybe<Scalars['URI']>;
  user?: Maybe<User>;
  userLogin?: Maybe<Scalars['String']>;
  userResourcePath?: Maybe<Scalars['URI']>;
  userUrl?: Maybe<Scalars['URI']>;
};

export type OrgUpdateDefaultRepositoryPermissionAuditEntry = Node & AuditEntry & OrganizationAuditEntryData & {
   __typename?: 'OrgUpdateDefaultRepositoryPermissionAuditEntry';
  action: Scalars['String'];
  actor?: Maybe<AuditEntryActor>;
  actorIp?: Maybe<Scalars['String']>;
  actorLocation?: Maybe<ActorLocation>;
  actorLogin?: Maybe<Scalars['String']>;
  actorResourcePath?: Maybe<Scalars['URI']>;
  actorUrl?: Maybe<Scalars['URI']>;
  createdAt: Scalars['PreciseDateTime'];
  id: Scalars['ID'];
  operationType?: Maybe<OperationType>;
  organization?: Maybe<Organization>;
  organizationName?: Maybe<Scalars['String']>;
  organizationResourcePath?: Maybe<Scalars['URI']>;
  organizationUrl?: Maybe<Scalars['URI']>;
  permission?: Maybe<OrgUpdateDefaultRepositoryPermissionAuditEntryPermission>;
  permissionWas?: Maybe<OrgUpdateDefaultRepositoryPermissionAuditEntryPermission>;
  user?: Maybe<User>;
  userLogin?: Maybe<Scalars['String']>;
  userResourcePath?: Maybe<Scalars['URI']>;
  userUrl?: Maybe<Scalars['URI']>;
};

export enum OrgUpdateDefaultRepositoryPermissionAuditEntryPermission {
  Read = 'READ',
  Write = 'WRITE',
  Admin = 'ADMIN',
  None = 'NONE'
}

export type OrgUpdateMemberAuditEntry = Node & AuditEntry & OrganizationAuditEntryData & {
   __typename?: 'OrgUpdateMemberAuditEntry';
  action: Scalars['String'];
  actor?: Maybe<AuditEntryActor>;
  actorIp?: Maybe<Scalars['String']>;
  actorLocation?: Maybe<ActorLocation>;
  actorLogin?: Maybe<Scalars['String']>;
  actorResourcePath?: Maybe<Scalars['URI']>;
  actorUrl?: Maybe<Scalars['URI']>;
  createdAt: Scalars['PreciseDateTime'];
  id: Scalars['ID'];
  operationType?: Maybe<OperationType>;
  organization?: Maybe<Organization>;
  organizationName?: Maybe<Scalars['String']>;
  organizationResourcePath?: Maybe<Scalars['URI']>;
  organizationUrl?: Maybe<Scalars['URI']>;
  permission?: Maybe<OrgUpdateMemberAuditEntryPermission>;
  permissionWas?: Maybe<OrgUpdateMemberAuditEntryPermission>;
  user?: Maybe<User>;
  userLogin?: Maybe<Scalars['String']>;
  userResourcePath?: Maybe<Scalars['URI']>;
  userUrl?: Maybe<Scalars['URI']>;
};

export enum OrgUpdateMemberAuditEntryPermission {
  Read = 'READ',
  Admin = 'ADMIN'
}

export type OrgUpdateMemberRepositoryCreationPermissionAuditEntry = Node & AuditEntry & OrganizationAuditEntryData & {
   __typename?: 'OrgUpdateMemberRepositoryCreationPermissionAuditEntry';
  action: Scalars['String'];
  actor?: Maybe<AuditEntryActor>;
  actorIp?: Maybe<Scalars['String']>;
  actorLocation?: Maybe<ActorLocation>;
  actorLogin?: Maybe<Scalars['String']>;
  actorResourcePath?: Maybe<Scalars['URI']>;
  actorUrl?: Maybe<Scalars['URI']>;
  canCreateRepositories?: Maybe<Scalars['Boolean']>;
  createdAt: Scalars['PreciseDateTime'];
  id: Scalars['ID'];
  operationType?: Maybe<OperationType>;
  organization?: Maybe<Organization>;
  organizationName?: Maybe<Scalars['String']>;
  organizationResourcePath?: Maybe<Scalars['URI']>;
  organizationUrl?: Maybe<Scalars['URI']>;
  user?: Maybe<User>;
  userLogin?: Maybe<Scalars['String']>;
  userResourcePath?: Maybe<Scalars['URI']>;
  userUrl?: Maybe<Scalars['URI']>;
  visibility?: Maybe<OrgUpdateMemberRepositoryCreationPermissionAuditEntryVisibility>;
};

export enum OrgUpdateMemberRepositoryCreationPermissionAuditEntryVisibility {
  All = 'ALL',
  Public = 'PUBLIC'
}

export type OrgUpdateMemberRepositoryInvitationPermissionAuditEntry = Node & AuditEntry & OrganizationAuditEntryData & {
   __typename?: 'OrgUpdateMemberRepositoryInvitationPermissionAuditEntry';
  action: Scalars['String'];
  actor?: Maybe<AuditEntryActor>;
  actorIp?: Maybe<Scalars['String']>;
  actorLocation?: Maybe<ActorLocation>;
  actorLogin?: Maybe<Scalars['String']>;
  actorResourcePath?: Maybe<Scalars['URI']>;
  actorUrl?: Maybe<Scalars['URI']>;
  canInviteOutsideCollaboratorsToRepositories?: Maybe<Scalars['Boolean']>;
  createdAt: Scalars['PreciseDateTime'];
  id: Scalars['ID'];
  operationType?: Maybe<OperationType>;
  organization?: Maybe<Organization>;
  organizationName?: Maybe<Scalars['String']>;
  organizationResourcePath?: Maybe<Scalars['URI']>;
  organizationUrl?: Maybe<Scalars['URI']>;
  user?: Maybe<User>;
  userLogin?: Maybe<Scalars['String']>;
  userResourcePath?: Maybe<Scalars['URI']>;
  userUrl?: Maybe<Scalars['URI']>;
};

export type PageInfo = {
   __typename?: 'PageInfo';
  endCursor?: Maybe<Scalars['String']>;
  hasNextPage: Scalars['Boolean'];
  hasPreviousPage: Scalars['Boolean'];
  startCursor?: Maybe<Scalars['String']>;
};

export type PermissionGranter = Organization | Repository | Team;

export type PermissionSource = {
   __typename?: 'PermissionSource';
  organization: Organization;
  permission: DefaultRepositoryPermissionField;
  source: PermissionGranter;
};

export type PinnableItem = Gist | Repository;

export type PinnableItemConnection = {
   __typename?: 'PinnableItemConnection';
  edges?: Maybe<Array<Maybe<PinnableItemEdge>>>;
  nodes?: Maybe<Array<Maybe<PinnableItem>>>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type PinnableItemEdge = {
   __typename?: 'PinnableItemEdge';
  cursor: Scalars['String'];
  node?: Maybe<PinnableItem>;
};

export enum PinnableItemType {
  Repository = 'REPOSITORY',
  Gist = 'GIST',
  Issue = 'ISSUE',
  Project = 'PROJECT',
  PullRequest = 'PULL_REQUEST',
  User = 'USER',
  Organization = 'ORGANIZATION',
  Team = 'TEAM'
}

export type PinnedEvent = Node & {
   __typename?: 'PinnedEvent';
  actor?: Maybe<Actor>;
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  issue: Issue;
};


export type PrivateRepositoryForkingDisableAuditEntry = Node & AuditEntry & EnterpriseAuditEntryData & OrganizationAuditEntryData & RepositoryAuditEntryData & {
   __typename?: 'PrivateRepositoryForkingDisableAuditEntry';
  action: Scalars['String'];
  actor?: Maybe<AuditEntryActor>;
  actorIp?: Maybe<Scalars['String']>;
  actorLocation?: Maybe<ActorLocation>;
  actorLogin?: Maybe<Scalars['String']>;
  actorResourcePath?: Maybe<Scalars['URI']>;
  actorUrl?: Maybe<Scalars['URI']>;
  createdAt: Scalars['PreciseDateTime'];
  enterpriseResourcePath?: Maybe<Scalars['URI']>;
  enterpriseSlug?: Maybe<Scalars['String']>;
  enterpriseUrl?: Maybe<Scalars['URI']>;
  id: Scalars['ID'];
  operationType?: Maybe<OperationType>;
  organization?: Maybe<Organization>;
  organizationName?: Maybe<Scalars['String']>;
  organizationResourcePath?: Maybe<Scalars['URI']>;
  organizationUrl?: Maybe<Scalars['URI']>;
  repository?: Maybe<Repository>;
  repositoryName?: Maybe<Scalars['String']>;
  repositoryResourcePath?: Maybe<Scalars['URI']>;
  repositoryUrl?: Maybe<Scalars['URI']>;
  user?: Maybe<User>;
  userLogin?: Maybe<Scalars['String']>;
  userResourcePath?: Maybe<Scalars['URI']>;
  userUrl?: Maybe<Scalars['URI']>;
};

export type PrivateRepositoryForkingEnableAuditEntry = Node & AuditEntry & EnterpriseAuditEntryData & OrganizationAuditEntryData & RepositoryAuditEntryData & {
   __typename?: 'PrivateRepositoryForkingEnableAuditEntry';
  action: Scalars['String'];
  actor?: Maybe<AuditEntryActor>;
  actorIp?: Maybe<Scalars['String']>;
  actorLocation?: Maybe<ActorLocation>;
  actorLogin?: Maybe<Scalars['String']>;
  actorResourcePath?: Maybe<Scalars['URI']>;
  actorUrl?: Maybe<Scalars['URI']>;
  createdAt: Scalars['PreciseDateTime'];
  enterpriseResourcePath?: Maybe<Scalars['URI']>;
  enterpriseSlug?: Maybe<Scalars['String']>;
  enterpriseUrl?: Maybe<Scalars['URI']>;
  id: Scalars['ID'];
  operationType?: Maybe<OperationType>;
  organization?: Maybe<Organization>;
  organizationName?: Maybe<Scalars['String']>;
  organizationResourcePath?: Maybe<Scalars['URI']>;
  organizationUrl?: Maybe<Scalars['URI']>;
  repository?: Maybe<Repository>;
  repositoryName?: Maybe<Scalars['String']>;
  repositoryResourcePath?: Maybe<Scalars['URI']>;
  repositoryUrl?: Maybe<Scalars['URI']>;
  user?: Maybe<User>;
  userLogin?: Maybe<Scalars['String']>;
  userResourcePath?: Maybe<Scalars['URI']>;
  userUrl?: Maybe<Scalars['URI']>;
};

export type ProfileItemShowcase = {
   __typename?: 'ProfileItemShowcase';
  hasPinnedItems: Scalars['Boolean'];
  items: PinnableItemConnection;
};


export type ProfileItemShowcaseItemsArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};

export type ProfileOwner = {
  anyPinnableItems: Scalars['Boolean'];
  email?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  itemShowcase: ProfileItemShowcase;
  location?: Maybe<Scalars['String']>;
  login: Scalars['String'];
  name?: Maybe<Scalars['String']>;
  pinnableItems: PinnableItemConnection;
  pinnedItems: PinnableItemConnection;
  pinnedItemsRemaining: Scalars['Int'];
  viewerCanChangePinnedItems: Scalars['Boolean'];
  websiteUrl?: Maybe<Scalars['URI']>;
};


export type ProfileOwnerAnyPinnableItemsArgs = {
  type?: Maybe<PinnableItemType>;
};


export type ProfileOwnerPinnableItemsArgs = {
  types?: Maybe<Array<PinnableItemType>>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type ProfileOwnerPinnedItemsArgs = {
  types?: Maybe<Array<PinnableItemType>>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};

export type Project = Node & Closable & Updatable & {
   __typename?: 'Project';
  body?: Maybe<Scalars['String']>;
  bodyHTML: Scalars['HTML'];
  closed: Scalars['Boolean'];
  closedAt?: Maybe<Scalars['DateTime']>;
  columns: ProjectColumnConnection;
  createdAt: Scalars['DateTime'];
  creator?: Maybe<Actor>;
  databaseId?: Maybe<Scalars['Int']>;
  id: Scalars['ID'];
  name: Scalars['String'];
  number: Scalars['Int'];
  owner: ProjectOwner;
  pendingCards: ProjectCardConnection;
  resourcePath: Scalars['URI'];
  state: ProjectState;
  updatedAt: Scalars['DateTime'];
  url: Scalars['URI'];
  viewerCanUpdate: Scalars['Boolean'];
};


export type ProjectColumnsArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type ProjectPendingCardsArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  archivedStates?: Maybe<Array<Maybe<ProjectCardArchivedState>>>;
};

export type ProjectCard = Node & {
   __typename?: 'ProjectCard';
  column?: Maybe<ProjectColumn>;
  content?: Maybe<ProjectCardItem>;
  createdAt: Scalars['DateTime'];
  creator?: Maybe<Actor>;
  databaseId?: Maybe<Scalars['Int']>;
  id: Scalars['ID'];
  isArchived: Scalars['Boolean'];
  note?: Maybe<Scalars['String']>;
  project: Project;
  resourcePath: Scalars['URI'];
  state?: Maybe<ProjectCardState>;
  updatedAt: Scalars['DateTime'];
  url: Scalars['URI'];
};

export enum ProjectCardArchivedState {
  Archived = 'ARCHIVED',
  NotArchived = 'NOT_ARCHIVED'
}

export type ProjectCardConnection = {
   __typename?: 'ProjectCardConnection';
  edges?: Maybe<Array<Maybe<ProjectCardEdge>>>;
  nodes?: Maybe<Array<Maybe<ProjectCard>>>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type ProjectCardEdge = {
   __typename?: 'ProjectCardEdge';
  cursor: Scalars['String'];
  node?: Maybe<ProjectCard>;
};

export type ProjectCardItem = Issue | PullRequest;

export enum ProjectCardState {
  ContentOnly = 'CONTENT_ONLY',
  NoteOnly = 'NOTE_ONLY',
  Redacted = 'REDACTED'
}

export type ProjectColumn = Node & {
   __typename?: 'ProjectColumn';
  cards: ProjectCardConnection;
  createdAt: Scalars['DateTime'];
  databaseId?: Maybe<Scalars['Int']>;
  id: Scalars['ID'];
  name: Scalars['String'];
  project: Project;
  purpose?: Maybe<ProjectColumnPurpose>;
  resourcePath: Scalars['URI'];
  updatedAt: Scalars['DateTime'];
  url: Scalars['URI'];
};


export type ProjectColumnCardsArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  archivedStates?: Maybe<Array<Maybe<ProjectCardArchivedState>>>;
};

export type ProjectColumnConnection = {
   __typename?: 'ProjectColumnConnection';
  edges?: Maybe<Array<Maybe<ProjectColumnEdge>>>;
  nodes?: Maybe<Array<Maybe<ProjectColumn>>>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type ProjectColumnEdge = {
   __typename?: 'ProjectColumnEdge';
  cursor: Scalars['String'];
  node?: Maybe<ProjectColumn>;
};

export enum ProjectColumnPurpose {
  Todo = 'TODO',
  InProgress = 'IN_PROGRESS',
  Done = 'DONE'
}

export type ProjectConnection = {
   __typename?: 'ProjectConnection';
  edges?: Maybe<Array<Maybe<ProjectEdge>>>;
  nodes?: Maybe<Array<Maybe<Project>>>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type ProjectEdge = {
   __typename?: 'ProjectEdge';
  cursor: Scalars['String'];
  node?: Maybe<Project>;
};

export type ProjectOrder = {
  field: ProjectOrderField;
  direction: OrderDirection;
};

export enum ProjectOrderField {
  CreatedAt = 'CREATED_AT',
  UpdatedAt = 'UPDATED_AT',
  Name = 'NAME'
}

export type ProjectOwner = {
  id: Scalars['ID'];
  project?: Maybe<Project>;
  projects: ProjectConnection;
  projectsResourcePath: Scalars['URI'];
  projectsUrl: Scalars['URI'];
  viewerCanCreateProjects: Scalars['Boolean'];
};


export type ProjectOwnerProjectArgs = {
  number: Scalars['Int'];
};


export type ProjectOwnerProjectsArgs = {
  orderBy?: Maybe<ProjectOrder>;
  search?: Maybe<Scalars['String']>;
  states?: Maybe<Array<ProjectState>>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};

export enum ProjectState {
  Open = 'OPEN',
  Closed = 'CLOSED'
}

export enum ProjectTemplate {
  BasicKanban = 'BASIC_KANBAN',
  AutomatedKanbanV2 = 'AUTOMATED_KANBAN_V2',
  AutomatedReviewsKanban = 'AUTOMATED_REVIEWS_KANBAN',
  BugTriage = 'BUG_TRIAGE'
}

export type PublicKey = Node & {
   __typename?: 'PublicKey';
  accessedAt?: Maybe<Scalars['DateTime']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  fingerprint: Scalars['String'];
  id: Scalars['ID'];
  isReadOnly?: Maybe<Scalars['Boolean']>;
  key: Scalars['String'];
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type PublicKeyConnection = {
   __typename?: 'PublicKeyConnection';
  edges?: Maybe<Array<Maybe<PublicKeyEdge>>>;
  nodes?: Maybe<Array<Maybe<PublicKey>>>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type PublicKeyEdge = {
   __typename?: 'PublicKeyEdge';
  cursor: Scalars['String'];
  node?: Maybe<PublicKey>;
};

export type PullRequest = Node & Assignable & Closable & Comment & Updatable & UpdatableComment & Labelable & Lockable & Reactable & RepositoryNode & Subscribable & UniformResourceLocatable & {
   __typename?: 'PullRequest';
  activeLockReason?: Maybe<LockReason>;
  additions: Scalars['Int'];
  assignees: UserConnection;
  author?: Maybe<Actor>;
  authorAssociation: CommentAuthorAssociation;
  baseRef?: Maybe<Ref>;
  baseRefName: Scalars['String'];
  baseRefOid: Scalars['GitObjectID'];
  baseRepository?: Maybe<Repository>;
  body: Scalars['String'];
  bodyHTML: Scalars['HTML'];
  bodyText: Scalars['String'];
  changedFiles: Scalars['Int'];
  checksResourcePath: Scalars['URI'];
  checksUrl: Scalars['URI'];
  closed: Scalars['Boolean'];
  closedAt?: Maybe<Scalars['DateTime']>;
  comments: IssueCommentConnection;
  commits: PullRequestCommitConnection;
  createdAt: Scalars['DateTime'];
  createdViaEmail: Scalars['Boolean'];
  databaseId?: Maybe<Scalars['Int']>;
  deletions: Scalars['Int'];
  editor?: Maybe<Actor>;
  files?: Maybe<PullRequestChangedFileConnection>;
  headRef?: Maybe<Ref>;
  headRefName: Scalars['String'];
  headRefOid: Scalars['GitObjectID'];
  headRepository?: Maybe<Repository>;
  headRepositoryOwner?: Maybe<RepositoryOwner>;
  hovercard: Hovercard;
  id: Scalars['ID'];
  includesCreatedEdit: Scalars['Boolean'];
  isCrossRepository: Scalars['Boolean'];
  isDraft: Scalars['Boolean'];
  labels?: Maybe<LabelConnection>;
  lastEditedAt?: Maybe<Scalars['DateTime']>;
  locked: Scalars['Boolean'];
  maintainerCanModify: Scalars['Boolean'];
  mergeCommit?: Maybe<Commit>;
  mergeable: MergeableState;
  merged: Scalars['Boolean'];
  mergedAt?: Maybe<Scalars['DateTime']>;
  mergedBy?: Maybe<Actor>;
  milestone?: Maybe<Milestone>;
  number: Scalars['Int'];
  participants: UserConnection;
  permalink: Scalars['URI'];
  potentialMergeCommit?: Maybe<Commit>;
  projectCards: ProjectCardConnection;
  publishedAt?: Maybe<Scalars['DateTime']>;
  reactionGroups?: Maybe<Array<ReactionGroup>>;
  reactions: ReactionConnection;
  repository: Repository;
  resourcePath: Scalars['URI'];
  revertResourcePath: Scalars['URI'];
  revertUrl: Scalars['URI'];
  reviewDecision?: Maybe<PullRequestReviewDecision>;
  reviewRequests?: Maybe<ReviewRequestConnection>;
  reviewThreads: PullRequestReviewThreadConnection;
  reviews?: Maybe<PullRequestReviewConnection>;
  state: PullRequestState;
  suggestedReviewers: Array<Maybe<SuggestedReviewer>>;
  /** @deprecated `timeline` will be removed Use PullRequest.timelineItems instead. Removal on 2019-10-01 UTC. */
  timeline: PullRequestTimelineConnection;
  timelineItems: PullRequestTimelineItemsConnection;
  title: Scalars['String'];
  updatedAt: Scalars['DateTime'];
  url: Scalars['URI'];
  userContentEdits?: Maybe<UserContentEditConnection>;
  viewerCanApplySuggestion: Scalars['Boolean'];
  viewerCanReact: Scalars['Boolean'];
  viewerCanSubscribe: Scalars['Boolean'];
  viewerCanUpdate: Scalars['Boolean'];
  viewerCannotUpdateReasons: Array<CommentCannotUpdateReason>;
  viewerDidAuthor: Scalars['Boolean'];
  viewerSubscription?: Maybe<SubscriptionState>;
};


export type PullRequestAssigneesArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type PullRequestCommentsArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type PullRequestCommitsArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type PullRequestFilesArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type PullRequestHovercardArgs = {
  includeNotificationContexts?: Maybe<Scalars['Boolean']>;
};


export type PullRequestLabelsArgs = {
  orderBy?: Maybe<LabelOrder>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type PullRequestParticipantsArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type PullRequestProjectCardsArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  archivedStates?: Maybe<Array<Maybe<ProjectCardArchivedState>>>;
};


export type PullRequestReactionsArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  content?: Maybe<ReactionContent>;
  orderBy?: Maybe<ReactionOrder>;
};


export type PullRequestReviewRequestsArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type PullRequestReviewThreadsArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type PullRequestReviewsArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  states?: Maybe<Array<PullRequestReviewState>>;
  author?: Maybe<Scalars['String']>;
};


export type PullRequestTimelineArgs = {
  since?: Maybe<Scalars['DateTime']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type PullRequestTimelineItemsArgs = {
  since?: Maybe<Scalars['DateTime']>;
  skip?: Maybe<Scalars['Int']>;
  itemTypes?: Maybe<Array<PullRequestTimelineItemsItemType>>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type PullRequestUserContentEditsArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};

export type PullRequestChangedFile = {
   __typename?: 'PullRequestChangedFile';
  additions: Scalars['Int'];
  deletions: Scalars['Int'];
  path: Scalars['String'];
};

export type PullRequestChangedFileConnection = {
   __typename?: 'PullRequestChangedFileConnection';
  edges?: Maybe<Array<Maybe<PullRequestChangedFileEdge>>>;
  nodes?: Maybe<Array<Maybe<PullRequestChangedFile>>>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type PullRequestChangedFileEdge = {
   __typename?: 'PullRequestChangedFileEdge';
  cursor: Scalars['String'];
  node?: Maybe<PullRequestChangedFile>;
};

export type PullRequestCommit = Node & UniformResourceLocatable & {
   __typename?: 'PullRequestCommit';
  commit: Commit;
  id: Scalars['ID'];
  pullRequest: PullRequest;
  resourcePath: Scalars['URI'];
  url: Scalars['URI'];
};

export type PullRequestCommitCommentThread = Node & RepositoryNode & {
   __typename?: 'PullRequestCommitCommentThread';
  comments: CommitCommentConnection;
  commit: Commit;
  id: Scalars['ID'];
  path?: Maybe<Scalars['String']>;
  position?: Maybe<Scalars['Int']>;
  pullRequest: PullRequest;
  repository: Repository;
};


export type PullRequestCommitCommentThreadCommentsArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};

export type PullRequestCommitConnection = {
   __typename?: 'PullRequestCommitConnection';
  edges?: Maybe<Array<Maybe<PullRequestCommitEdge>>>;
  nodes?: Maybe<Array<Maybe<PullRequestCommit>>>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type PullRequestCommitEdge = {
   __typename?: 'PullRequestCommitEdge';
  cursor: Scalars['String'];
  node?: Maybe<PullRequestCommit>;
};

export type PullRequestConnection = {
   __typename?: 'PullRequestConnection';
  edges?: Maybe<Array<Maybe<PullRequestEdge>>>;
  nodes?: Maybe<Array<Maybe<PullRequest>>>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type PullRequestContributionsByRepository = {
   __typename?: 'PullRequestContributionsByRepository';
  contributions: CreatedPullRequestContributionConnection;
  repository: Repository;
};


export type PullRequestContributionsByRepositoryContributionsArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<ContributionOrder>;
};

export type PullRequestEdge = {
   __typename?: 'PullRequestEdge';
  cursor: Scalars['String'];
  node?: Maybe<PullRequest>;
};

export enum PullRequestMergeMethod {
  Merge = 'MERGE',
  Squash = 'SQUASH',
  Rebase = 'REBASE'
}

export type PullRequestOrder = {
  field: PullRequestOrderField;
  direction: OrderDirection;
};

export enum PullRequestOrderField {
  CreatedAt = 'CREATED_AT',
  UpdatedAt = 'UPDATED_AT'
}

export type PullRequestReview = Node & Comment & Deletable & Updatable & UpdatableComment & Reactable & RepositoryNode & {
   __typename?: 'PullRequestReview';
  author?: Maybe<Actor>;
  authorAssociation: CommentAuthorAssociation;
  body: Scalars['String'];
  bodyHTML: Scalars['HTML'];
  bodyText: Scalars['String'];
  comments: PullRequestReviewCommentConnection;
  commit?: Maybe<Commit>;
  createdAt: Scalars['DateTime'];
  createdViaEmail: Scalars['Boolean'];
  databaseId?: Maybe<Scalars['Int']>;
  editor?: Maybe<Actor>;
  id: Scalars['ID'];
  includesCreatedEdit: Scalars['Boolean'];
  lastEditedAt?: Maybe<Scalars['DateTime']>;
  onBehalfOf: TeamConnection;
  publishedAt?: Maybe<Scalars['DateTime']>;
  pullRequest: PullRequest;
  reactionGroups?: Maybe<Array<ReactionGroup>>;
  reactions: ReactionConnection;
  repository: Repository;
  resourcePath: Scalars['URI'];
  state: PullRequestReviewState;
  submittedAt?: Maybe<Scalars['DateTime']>;
  updatedAt: Scalars['DateTime'];
  url: Scalars['URI'];
  userContentEdits?: Maybe<UserContentEditConnection>;
  viewerCanDelete: Scalars['Boolean'];
  viewerCanReact: Scalars['Boolean'];
  viewerCanUpdate: Scalars['Boolean'];
  viewerCannotUpdateReasons: Array<CommentCannotUpdateReason>;
  viewerDidAuthor: Scalars['Boolean'];
};


export type PullRequestReviewCommentsArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type PullRequestReviewOnBehalfOfArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type PullRequestReviewReactionsArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  content?: Maybe<ReactionContent>;
  orderBy?: Maybe<ReactionOrder>;
};


export type PullRequestReviewUserContentEditsArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};

export type PullRequestReviewComment = Node & Comment & Deletable & Minimizable & Updatable & UpdatableComment & Reactable & RepositoryNode & {
   __typename?: 'PullRequestReviewComment';
  author?: Maybe<Actor>;
  authorAssociation: CommentAuthorAssociation;
  body: Scalars['String'];
  bodyHTML: Scalars['HTML'];
  bodyText: Scalars['String'];
  commit?: Maybe<Commit>;
  createdAt: Scalars['DateTime'];
  createdViaEmail: Scalars['Boolean'];
  databaseId?: Maybe<Scalars['Int']>;
  diffHunk: Scalars['String'];
  draftedAt: Scalars['DateTime'];
  editor?: Maybe<Actor>;
  id: Scalars['ID'];
  includesCreatedEdit: Scalars['Boolean'];
  isMinimized: Scalars['Boolean'];
  lastEditedAt?: Maybe<Scalars['DateTime']>;
  minimizedReason?: Maybe<Scalars['String']>;
  originalCommit?: Maybe<Commit>;
  originalPosition: Scalars['Int'];
  outdated: Scalars['Boolean'];
  path: Scalars['String'];
  position?: Maybe<Scalars['Int']>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  pullRequest: PullRequest;
  pullRequestReview?: Maybe<PullRequestReview>;
  reactionGroups?: Maybe<Array<ReactionGroup>>;
  reactions: ReactionConnection;
  replyTo?: Maybe<PullRequestReviewComment>;
  repository: Repository;
  resourcePath: Scalars['URI'];
  state: PullRequestReviewCommentState;
  updatedAt: Scalars['DateTime'];
  url: Scalars['URI'];
  userContentEdits?: Maybe<UserContentEditConnection>;
  viewerCanDelete: Scalars['Boolean'];
  viewerCanMinimize: Scalars['Boolean'];
  viewerCanReact: Scalars['Boolean'];
  viewerCanUpdate: Scalars['Boolean'];
  viewerCannotUpdateReasons: Array<CommentCannotUpdateReason>;
  viewerDidAuthor: Scalars['Boolean'];
};


export type PullRequestReviewCommentReactionsArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  content?: Maybe<ReactionContent>;
  orderBy?: Maybe<ReactionOrder>;
};


export type PullRequestReviewCommentUserContentEditsArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};

export type PullRequestReviewCommentConnection = {
   __typename?: 'PullRequestReviewCommentConnection';
  edges?: Maybe<Array<Maybe<PullRequestReviewCommentEdge>>>;
  nodes?: Maybe<Array<Maybe<PullRequestReviewComment>>>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type PullRequestReviewCommentEdge = {
   __typename?: 'PullRequestReviewCommentEdge';
  cursor: Scalars['String'];
  node?: Maybe<PullRequestReviewComment>;
};

export enum PullRequestReviewCommentState {
  Pending = 'PENDING',
  Submitted = 'SUBMITTED'
}

export type PullRequestReviewConnection = {
   __typename?: 'PullRequestReviewConnection';
  edges?: Maybe<Array<Maybe<PullRequestReviewEdge>>>;
  nodes?: Maybe<Array<Maybe<PullRequestReview>>>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type PullRequestReviewContributionsByRepository = {
   __typename?: 'PullRequestReviewContributionsByRepository';
  contributions: CreatedPullRequestReviewContributionConnection;
  repository: Repository;
};


export type PullRequestReviewContributionsByRepositoryContributionsArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<ContributionOrder>;
};

export enum PullRequestReviewDecision {
  ChangesRequested = 'CHANGES_REQUESTED',
  Approved = 'APPROVED',
  ReviewRequired = 'REVIEW_REQUIRED'
}

export type PullRequestReviewEdge = {
   __typename?: 'PullRequestReviewEdge';
  cursor: Scalars['String'];
  node?: Maybe<PullRequestReview>;
};

export enum PullRequestReviewEvent {
  Comment = 'COMMENT',
  Approve = 'APPROVE',
  RequestChanges = 'REQUEST_CHANGES',
  Dismiss = 'DISMISS'
}

export enum PullRequestReviewState {
  Pending = 'PENDING',
  Commented = 'COMMENTED',
  Approved = 'APPROVED',
  ChangesRequested = 'CHANGES_REQUESTED',
  Dismissed = 'DISMISSED'
}

export type PullRequestReviewThread = Node & {
   __typename?: 'PullRequestReviewThread';
  comments: PullRequestReviewCommentConnection;
  diffSide: DiffSide;
  id: Scalars['ID'];
  isResolved: Scalars['Boolean'];
  line?: Maybe<Scalars['Int']>;
  originalLine?: Maybe<Scalars['Int']>;
  originalStartLine?: Maybe<Scalars['Int']>;
  pullRequest: PullRequest;
  repository: Repository;
  resolvedBy?: Maybe<User>;
  startDiffSide?: Maybe<DiffSide>;
  startLine?: Maybe<Scalars['Int']>;
  viewerCanResolve: Scalars['Boolean'];
  viewerCanUnresolve: Scalars['Boolean'];
};


export type PullRequestReviewThreadCommentsArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
};

export type PullRequestReviewThreadConnection = {
   __typename?: 'PullRequestReviewThreadConnection';
  edges?: Maybe<Array<Maybe<PullRequestReviewThreadEdge>>>;
  nodes?: Maybe<Array<Maybe<PullRequestReviewThread>>>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type PullRequestReviewThreadEdge = {
   __typename?: 'PullRequestReviewThreadEdge';
  cursor: Scalars['String'];
  node?: Maybe<PullRequestReviewThread>;
};

export type PullRequestRevisionMarker = {
   __typename?: 'PullRequestRevisionMarker';
  createdAt: Scalars['DateTime'];
  lastSeenCommit: Commit;
  pullRequest: PullRequest;
};

export enum PullRequestState {
  Open = 'OPEN',
  Closed = 'CLOSED',
  Merged = 'MERGED'
}

export type PullRequestTimelineConnection = {
   __typename?: 'PullRequestTimelineConnection';
  edges?: Maybe<Array<Maybe<PullRequestTimelineItemEdge>>>;
  nodes?: Maybe<Array<Maybe<PullRequestTimelineItem>>>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type PullRequestTimelineItem = AssignedEvent | BaseRefForcePushedEvent | ClosedEvent | Commit | CommitCommentThread | CrossReferencedEvent | DemilestonedEvent | DeployedEvent | DeploymentEnvironmentChangedEvent | HeadRefDeletedEvent | HeadRefForcePushedEvent | HeadRefRestoredEvent | IssueComment | LabeledEvent | LockedEvent | MergedEvent | MilestonedEvent | PullRequestReview | PullRequestReviewComment | PullRequestReviewThread | ReferencedEvent | RenamedTitleEvent | ReopenedEvent | ReviewDismissedEvent | ReviewRequestRemovedEvent | ReviewRequestedEvent | SubscribedEvent | UnassignedEvent | UnlabeledEvent | UnlockedEvent | UnsubscribedEvent | UserBlockedEvent;

export type PullRequestTimelineItemEdge = {
   __typename?: 'PullRequestTimelineItemEdge';
  cursor: Scalars['String'];
  node?: Maybe<PullRequestTimelineItem>;
};

export type PullRequestTimelineItems = AddedToProjectEvent | AssignedEvent | BaseRefChangedEvent | BaseRefForcePushedEvent | ClosedEvent | CommentDeletedEvent | ConnectedEvent | ConvertToDraftEvent | ConvertedNoteToIssueEvent | CrossReferencedEvent | DemilestonedEvent | DeployedEvent | DeploymentEnvironmentChangedEvent | DisconnectedEvent | HeadRefDeletedEvent | HeadRefForcePushedEvent | HeadRefRestoredEvent | IssueComment | LabeledEvent | LockedEvent | MarkedAsDuplicateEvent | MentionedEvent | MergedEvent | MilestonedEvent | MovedColumnsInProjectEvent | PinnedEvent | PullRequestCommit | PullRequestCommitCommentThread | PullRequestReview | PullRequestReviewThread | PullRequestRevisionMarker | ReadyForReviewEvent | ReferencedEvent | RemovedFromProjectEvent | RenamedTitleEvent | ReopenedEvent | ReviewDismissedEvent | ReviewRequestRemovedEvent | ReviewRequestedEvent | SubscribedEvent | TransferredEvent | UnassignedEvent | UnlabeledEvent | UnlockedEvent | UnmarkedAsDuplicateEvent | UnpinnedEvent | UnsubscribedEvent | UserBlockedEvent;

export type PullRequestTimelineItemsConnection = {
   __typename?: 'PullRequestTimelineItemsConnection';
  edges?: Maybe<Array<Maybe<PullRequestTimelineItemsEdge>>>;
  filteredCount: Scalars['Int'];
  nodes?: Maybe<Array<Maybe<PullRequestTimelineItems>>>;
  pageCount: Scalars['Int'];
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
  updatedAt: Scalars['DateTime'];
};

export type PullRequestTimelineItemsEdge = {
   __typename?: 'PullRequestTimelineItemsEdge';
  cursor: Scalars['String'];
  node?: Maybe<PullRequestTimelineItems>;
};

export enum PullRequestTimelineItemsItemType {
  PullRequestCommit = 'PULL_REQUEST_COMMIT',
  PullRequestCommitCommentThread = 'PULL_REQUEST_COMMIT_COMMENT_THREAD',
  PullRequestReview = 'PULL_REQUEST_REVIEW',
  PullRequestReviewThread = 'PULL_REQUEST_REVIEW_THREAD',
  PullRequestRevisionMarker = 'PULL_REQUEST_REVISION_MARKER',
  BaseRefChangedEvent = 'BASE_REF_CHANGED_EVENT',
  BaseRefForcePushedEvent = 'BASE_REF_FORCE_PUSHED_EVENT',
  DeployedEvent = 'DEPLOYED_EVENT',
  DeploymentEnvironmentChangedEvent = 'DEPLOYMENT_ENVIRONMENT_CHANGED_EVENT',
  HeadRefDeletedEvent = 'HEAD_REF_DELETED_EVENT',
  HeadRefForcePushedEvent = 'HEAD_REF_FORCE_PUSHED_EVENT',
  HeadRefRestoredEvent = 'HEAD_REF_RESTORED_EVENT',
  MergedEvent = 'MERGED_EVENT',
  ReviewDismissedEvent = 'REVIEW_DISMISSED_EVENT',
  ReviewRequestedEvent = 'REVIEW_REQUESTED_EVENT',
  ReviewRequestRemovedEvent = 'REVIEW_REQUEST_REMOVED_EVENT',
  ReadyForReviewEvent = 'READY_FOR_REVIEW_EVENT',
  ConvertToDraftEvent = 'CONVERT_TO_DRAFT_EVENT',
  IssueComment = 'ISSUE_COMMENT',
  CrossReferencedEvent = 'CROSS_REFERENCED_EVENT',
  AddedToProjectEvent = 'ADDED_TO_PROJECT_EVENT',
  AssignedEvent = 'ASSIGNED_EVENT',
  ClosedEvent = 'CLOSED_EVENT',
  CommentDeletedEvent = 'COMMENT_DELETED_EVENT',
  ConnectedEvent = 'CONNECTED_EVENT',
  ConvertedNoteToIssueEvent = 'CONVERTED_NOTE_TO_ISSUE_EVENT',
  DemilestonedEvent = 'DEMILESTONED_EVENT',
  DisconnectedEvent = 'DISCONNECTED_EVENT',
  LabeledEvent = 'LABELED_EVENT',
  LockedEvent = 'LOCKED_EVENT',
  MarkedAsDuplicateEvent = 'MARKED_AS_DUPLICATE_EVENT',
  MentionedEvent = 'MENTIONED_EVENT',
  MilestonedEvent = 'MILESTONED_EVENT',
  MovedColumnsInProjectEvent = 'MOVED_COLUMNS_IN_PROJECT_EVENT',
  PinnedEvent = 'PINNED_EVENT',
  ReferencedEvent = 'REFERENCED_EVENT',
  RemovedFromProjectEvent = 'REMOVED_FROM_PROJECT_EVENT',
  RenamedTitleEvent = 'RENAMED_TITLE_EVENT',
  ReopenedEvent = 'REOPENED_EVENT',
  SubscribedEvent = 'SUBSCRIBED_EVENT',
  TransferredEvent = 'TRANSFERRED_EVENT',
  UnassignedEvent = 'UNASSIGNED_EVENT',
  UnlabeledEvent = 'UNLABELED_EVENT',
  UnlockedEvent = 'UNLOCKED_EVENT',
  UserBlockedEvent = 'USER_BLOCKED_EVENT',
  UnmarkedAsDuplicateEvent = 'UNMARKED_AS_DUPLICATE_EVENT',
  UnpinnedEvent = 'UNPINNED_EVENT',
  UnsubscribedEvent = 'UNSUBSCRIBED_EVENT'
}

export enum PullRequestUpdateState {
  Open = 'OPEN',
  Closed = 'CLOSED'
}

export type PushAllowance = Node & {
   __typename?: 'PushAllowance';
  actor?: Maybe<PushAllowanceActor>;
  branchProtectionRule?: Maybe<BranchProtectionRule>;
  id: Scalars['ID'];
};

export type PushAllowanceActor = App | Team | User;

export type PushAllowanceConnection = {
   __typename?: 'PushAllowanceConnection';
  edges?: Maybe<Array<Maybe<PushAllowanceEdge>>>;
  nodes?: Maybe<Array<Maybe<PushAllowance>>>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type PushAllowanceEdge = {
   __typename?: 'PushAllowanceEdge';
  cursor: Scalars['String'];
  node?: Maybe<PushAllowance>;
};

export type Query = {
   __typename?: 'Query';
  codeOfConduct?: Maybe<CodeOfConduct>;
  codesOfConduct?: Maybe<Array<Maybe<CodeOfConduct>>>;
  enterprise?: Maybe<Enterprise>;
  enterpriseAdministratorInvitation?: Maybe<EnterpriseAdministratorInvitation>;
  enterpriseAdministratorInvitationByToken?: Maybe<EnterpriseAdministratorInvitation>;
  license?: Maybe<License>;
  licenses: Array<Maybe<License>>;
  marketplaceCategories: Array<MarketplaceCategory>;
  marketplaceCategory?: Maybe<MarketplaceCategory>;
  marketplaceListing?: Maybe<MarketplaceListing>;
  marketplaceListings: MarketplaceListingConnection;
  meta: GitHubMetadata;
  node?: Maybe<Node>;
  nodes: Array<Maybe<Node>>;
  organization?: Maybe<Organization>;
  rateLimit?: Maybe<RateLimit>;
  relay: Query;
  repository?: Maybe<Repository>;
  repositoryOwner?: Maybe<RepositoryOwner>;
  resource?: Maybe<UniformResourceLocatable>;
  search: SearchResultItemConnection;
  securityAdvisories: SecurityAdvisoryConnection;
  securityAdvisory?: Maybe<SecurityAdvisory>;
  securityVulnerabilities: SecurityVulnerabilityConnection;
  /** @deprecated `Query.sponsorsListing` will be removed. Use `Sponsorable.sponsorsListing` instead. Removal on 2020-04-01 UTC. */
  sponsorsListing?: Maybe<SponsorsListing>;
  topic?: Maybe<Topic>;
  user?: Maybe<User>;
  viewer: User;
};


export type QueryCodeOfConductArgs = {
  key: Scalars['String'];
};


export type QueryEnterpriseArgs = {
  slug: Scalars['String'];
  invitationToken?: Maybe<Scalars['String']>;
};


export type QueryEnterpriseAdministratorInvitationArgs = {
  userLogin: Scalars['String'];
  enterpriseSlug: Scalars['String'];
  role: EnterpriseAdministratorRole;
};


export type QueryEnterpriseAdministratorInvitationByTokenArgs = {
  invitationToken: Scalars['String'];
};


export type QueryLicenseArgs = {
  key: Scalars['String'];
};


export type QueryMarketplaceCategoriesArgs = {
  includeCategories?: Maybe<Array<Scalars['String']>>;
  excludeEmpty?: Maybe<Scalars['Boolean']>;
  excludeSubcategories?: Maybe<Scalars['Boolean']>;
};


export type QueryMarketplaceCategoryArgs = {
  slug: Scalars['String'];
  useTopicAliases?: Maybe<Scalars['Boolean']>;
};


export type QueryMarketplaceListingArgs = {
  slug: Scalars['String'];
};


export type QueryMarketplaceListingsArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  categorySlug?: Maybe<Scalars['String']>;
  useTopicAliases?: Maybe<Scalars['Boolean']>;
  viewerCanAdmin?: Maybe<Scalars['Boolean']>;
  adminId?: Maybe<Scalars['ID']>;
  organizationId?: Maybe<Scalars['ID']>;
  allStates?: Maybe<Scalars['Boolean']>;
  slugs?: Maybe<Array<Maybe<Scalars['String']>>>;
  primaryCategoryOnly?: Maybe<Scalars['Boolean']>;
  withFreeTrialsOnly?: Maybe<Scalars['Boolean']>;
};


export type QueryNodeArgs = {
  id: Scalars['ID'];
};


export type QueryNodesArgs = {
  ids: Array<Scalars['ID']>;
};


export type QueryOrganizationArgs = {
  login: Scalars['String'];
};


export type QueryRateLimitArgs = {
  dryRun?: Maybe<Scalars['Boolean']>;
};


export type QueryRepositoryArgs = {
  owner: Scalars['String'];
  name: Scalars['String'];
};


export type QueryRepositoryOwnerArgs = {
  login: Scalars['String'];
};


export type QueryResourceArgs = {
  url: Scalars['URI'];
};


export type QuerySearchArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  query: Scalars['String'];
  type: SearchType;
};


export type QuerySecurityAdvisoriesArgs = {
  orderBy?: Maybe<SecurityAdvisoryOrder>;
  identifier?: Maybe<SecurityAdvisoryIdentifierFilter>;
  publishedSince?: Maybe<Scalars['DateTime']>;
  updatedSince?: Maybe<Scalars['DateTime']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type QuerySecurityAdvisoryArgs = {
  ghsaId: Scalars['String'];
};


export type QuerySecurityVulnerabilitiesArgs = {
  orderBy?: Maybe<SecurityVulnerabilityOrder>;
  ecosystem?: Maybe<SecurityAdvisoryEcosystem>;
  package?: Maybe<Scalars['String']>;
  severities?: Maybe<Array<SecurityAdvisorySeverity>>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type QuerySponsorsListingArgs = {
  slug: Scalars['String'];
};


export type QueryTopicArgs = {
  name: Scalars['String'];
};


export type QueryUserArgs = {
  login: Scalars['String'];
};

export type RateLimit = {
   __typename?: 'RateLimit';
  cost: Scalars['Int'];
  limit: Scalars['Int'];
  nodeCount: Scalars['Int'];
  remaining: Scalars['Int'];
  resetAt: Scalars['DateTime'];
};

export type Reactable = {
  databaseId?: Maybe<Scalars['Int']>;
  id: Scalars['ID'];
  reactionGroups?: Maybe<Array<ReactionGroup>>;
  reactions: ReactionConnection;
  viewerCanReact: Scalars['Boolean'];
};


export type ReactableReactionsArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  content?: Maybe<ReactionContent>;
  orderBy?: Maybe<ReactionOrder>;
};

export type ReactingUserConnection = {
   __typename?: 'ReactingUserConnection';
  edges?: Maybe<Array<Maybe<ReactingUserEdge>>>;
  nodes?: Maybe<Array<Maybe<User>>>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type ReactingUserEdge = {
   __typename?: 'ReactingUserEdge';
  cursor: Scalars['String'];
  node: User;
  reactedAt: Scalars['DateTime'];
};

export type Reaction = Node & {
   __typename?: 'Reaction';
  content: ReactionContent;
  createdAt: Scalars['DateTime'];
  databaseId?: Maybe<Scalars['Int']>;
  id: Scalars['ID'];
  reactable: Reactable;
  user?: Maybe<User>;
};

export type ReactionConnection = {
   __typename?: 'ReactionConnection';
  edges?: Maybe<Array<Maybe<ReactionEdge>>>;
  nodes?: Maybe<Array<Maybe<Reaction>>>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
  viewerHasReacted: Scalars['Boolean'];
};

export enum ReactionContent {
  ThumbsUp = 'THUMBS_UP',
  ThumbsDown = 'THUMBS_DOWN',
  Laugh = 'LAUGH',
  Hooray = 'HOORAY',
  Confused = 'CONFUSED',
  Heart = 'HEART',
  Rocket = 'ROCKET',
  Eyes = 'EYES'
}

export type ReactionEdge = {
   __typename?: 'ReactionEdge';
  cursor: Scalars['String'];
  node?: Maybe<Reaction>;
};

export type ReactionGroup = {
   __typename?: 'ReactionGroup';
  content: ReactionContent;
  createdAt?: Maybe<Scalars['DateTime']>;
  subject: Reactable;
  users: ReactingUserConnection;
  viewerHasReacted: Scalars['Boolean'];
};


export type ReactionGroupUsersArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};

export type ReactionOrder = {
  field: ReactionOrderField;
  direction: OrderDirection;
};

export enum ReactionOrderField {
  CreatedAt = 'CREATED_AT'
}

export type ReadyForReviewEvent = Node & UniformResourceLocatable & {
   __typename?: 'ReadyForReviewEvent';
  actor?: Maybe<Actor>;
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  pullRequest: PullRequest;
  resourcePath: Scalars['URI'];
  url: Scalars['URI'];
};

export type Ref = Node & {
   __typename?: 'Ref';
  associatedPullRequests: PullRequestConnection;
  id: Scalars['ID'];
  name: Scalars['String'];
  prefix: Scalars['String'];
  repository: Repository;
  target: GitObject;
};


export type RefAssociatedPullRequestsArgs = {
  states?: Maybe<Array<PullRequestState>>;
  labels?: Maybe<Array<Scalars['String']>>;
  headRefName?: Maybe<Scalars['String']>;
  baseRefName?: Maybe<Scalars['String']>;
  orderBy?: Maybe<IssueOrder>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};

export type RefConnection = {
   __typename?: 'RefConnection';
  edges?: Maybe<Array<Maybe<RefEdge>>>;
  nodes?: Maybe<Array<Maybe<Ref>>>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type RefEdge = {
   __typename?: 'RefEdge';
  cursor: Scalars['String'];
  node?: Maybe<Ref>;
};

export type ReferencedEvent = Node & {
   __typename?: 'ReferencedEvent';
  actor?: Maybe<Actor>;
  commit?: Maybe<Commit>;
  commitRepository: Repository;
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  isCrossRepository: Scalars['Boolean'];
  isDirectReference: Scalars['Boolean'];
  subject: ReferencedSubject;
};

export type ReferencedSubject = Issue | PullRequest;

export type RefOrder = {
  field: RefOrderField;
  direction: OrderDirection;
};

export enum RefOrderField {
  TagCommitDate = 'TAG_COMMIT_DATE',
  Alphabetical = 'ALPHABETICAL'
}

export type RegenerateEnterpriseIdentityProviderRecoveryCodesInput = {
  enterpriseId: Scalars['ID'];
  clientMutationId?: Maybe<Scalars['String']>;
};

export type RegenerateEnterpriseIdentityProviderRecoveryCodesPayload = {
   __typename?: 'RegenerateEnterpriseIdentityProviderRecoveryCodesPayload';
  clientMutationId?: Maybe<Scalars['String']>;
  identityProvider?: Maybe<EnterpriseIdentityProvider>;
};

export type RegistryPackage = Node & {
   __typename?: 'RegistryPackage';
  /** @deprecated Renaming GitHub Packages fields and objects. Use the `Package` object instead. Removal on 2020-04-01 UTC. */
  color: Scalars['String'];
  id: Scalars['ID'];
  /** @deprecated Renaming GitHub Packages fields and objects. Use the `Package` object instead. Removal on 2020-04-01 UTC. */
  latestVersion?: Maybe<RegistryPackageVersion>;
  /** @deprecated Renaming GitHub Packages fields and objects. Use the `Package` object instead. Removal on 2020-04-01 UTC. */
  name: Scalars['String'];
  /** @deprecated Renaming GitHub Packages fields and objects. Use the `Package` object instead. Removal on 2020-04-01 UTC. */
  nameWithOwner: Scalars['String'];
  /** @deprecated Renaming GitHub Packages fields and objects. Use the `Package` object. Removal on 2020-04-01 UTC. */
  packageFileByGuid?: Maybe<RegistryPackageFile>;
  /** @deprecated Renaming GitHub Packages fields and objects. Use the `Package` object. Removal on 2020-04-01 UTC. */
  packageFileBySha256?: Maybe<RegistryPackageFile>;
  /** @deprecated Renaming GitHub Packages fields and objects. Use the `Package` object instead. Removal on 2020-04-01 UTC. */
  packageType: RegistryPackageType;
  /** @deprecated Renaming GitHub Packages fields and objects. Use the `Package` object instead. Removal on 2020-04-01 UTC. */
  preReleaseVersions?: Maybe<RegistryPackageVersionConnection>;
  /** @deprecated Renaming GitHub Packages fields and objects. Use the `Package` object instead. Removal on 2020-04-01 UTC. */
  registryPackageType?: Maybe<Scalars['String']>;
  /** @deprecated Renaming GitHub Packages fields and objects. Use the `Package` object instead. Removal on 2020-04-01 UTC. */
  repository?: Maybe<Repository>;
  /** @deprecated Renaming GitHub Packages fields and objects. Use the `Package` object instead. Removal on 2020-04-01 UTC. */
  statistics?: Maybe<RegistryPackageStatistics>;
  /** @deprecated Renaming GitHub Packages fields and objects. Use the `Package` object. Removal on 2020-04-01 UTC. */
  tags: RegistryPackageTagConnection;
  /** @deprecated Renaming GitHub Packages fields and objects. Use the `Package` object. Removal on 2020-04-01 UTC. */
  topics?: Maybe<TopicConnection>;
  /** @deprecated Renaming GitHub Packages fields and objects. Use the `Package` object instead. Removal on 2020-04-01 UTC. */
  version?: Maybe<RegistryPackageVersion>;
  /** @deprecated Renaming GitHub Packages fields and objects. Use the `Package` object instead. Removal on 2020-04-01 UTC. */
  versionByPlatform?: Maybe<RegistryPackageVersion>;
  /** @deprecated Renaming GitHub Packages fields and objects. Use the `Package` object instead. Removal on 2020-04-01 UTC. */
  versionBySha256?: Maybe<RegistryPackageVersion>;
  /** @deprecated Renaming GitHub Packages fields and objects. Use the `Package` object instead. Removal on 2020-04-01 UTC. */
  versions: RegistryPackageVersionConnection;
  /** @deprecated Renaming GitHub Packages fields and objects. Use the `Package` object instead. Removal on 2020-04-01 UTC. */
  versionsByMetadatum?: Maybe<RegistryPackageVersionConnection>;
};


export type RegistryPackagePackageFileByGuidArgs = {
  guid: Scalars['String'];
};


export type RegistryPackagePackageFileBySha256Args = {
  sha256: Scalars['String'];
};


export type RegistryPackagePreReleaseVersionsArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type RegistryPackageTagsArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type RegistryPackageTopicsArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type RegistryPackageVersionArgs = {
  version: Scalars['String'];
};


export type RegistryPackageVersionByPlatformArgs = {
  version: Scalars['String'];
  platform: Scalars['String'];
};


export type RegistryPackageVersionBySha256Args = {
  sha256: Scalars['String'];
};


export type RegistryPackageVersionsArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type RegistryPackageVersionsByMetadatumArgs = {
  metadatum: RegistryPackageMetadatum;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};

export type RegistryPackageConnection = {
   __typename?: 'RegistryPackageConnection';
  edges?: Maybe<Array<Maybe<RegistryPackageEdge>>>;
  nodes?: Maybe<Array<Maybe<RegistryPackage>>>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type RegistryPackageDependency = Node & {
   __typename?: 'RegistryPackageDependency';
  /** @deprecated Renaming GitHub Packages fields and objects. Use the `PackageDependency` object instead. Removal on 2020-04-01 UTC. */
  dependencyType: RegistryPackageDependencyType;
  id: Scalars['ID'];
  /** @deprecated Renaming GitHub Packages fields and objects. Use the `PackageDependency` object instead. Removal on 2020-04-01 UTC. */
  name: Scalars['String'];
  /** @deprecated Renaming GitHub Packages fields and objects. Use the `PackageDependency` object instead. Removal on 2020-04-01 UTC. */
  version: Scalars['String'];
};

export type RegistryPackageDependencyConnection = {
   __typename?: 'RegistryPackageDependencyConnection';
  edges?: Maybe<Array<Maybe<RegistryPackageDependencyEdge>>>;
  nodes?: Maybe<Array<Maybe<RegistryPackageDependency>>>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type RegistryPackageDependencyEdge = {
   __typename?: 'RegistryPackageDependencyEdge';
  cursor: Scalars['String'];
  node?: Maybe<RegistryPackageDependency>;
};

export enum RegistryPackageDependencyType {
  Default = 'DEFAULT',
  Dev = 'DEV',
  Test = 'TEST',
  Peer = 'PEER',
  Optional = 'OPTIONAL',
  Bundled = 'BUNDLED'
}

export type RegistryPackageEdge = {
   __typename?: 'RegistryPackageEdge';
  cursor: Scalars['String'];
  node?: Maybe<RegistryPackage>;
};

export type RegistryPackageFile = Node & {
   __typename?: 'RegistryPackageFile';
  /** @deprecated Renaming GitHub Packages fields and objects. Use the `PackageFile` object instead. Removal on 2020-04-01 UTC. */
  guid?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  /** @deprecated Renaming GitHub Packages fields and objects. Use the `PackageFile` object instead. Removal on 2020-04-01 UTC. */
  md5?: Maybe<Scalars['String']>;
  /** @deprecated Renaming GitHub Packages fields and objects. Use the `PackageFile` object instead. Removal on 2020-04-01 UTC. */
  metadataUrl: Scalars['URI'];
  /** @deprecated Renaming GitHub Packages fields and objects. Use the `PackageFile` object instead. Removal on 2020-04-01 UTC. */
  name: Scalars['String'];
  /** @deprecated Renaming GitHub Packages fields and objects. Use the `PackageFile` object instead. Removal on 2020-04-01 UTC. */
  packageVersion: RegistryPackageVersion;
  /** @deprecated Renaming GitHub Packages fields and objects. Use the `PackageFile` object instead. Removal on 2020-04-01 UTC. */
  sha1?: Maybe<Scalars['String']>;
  /** @deprecated Renaming GitHub Packages fields and objects. Use the `PackageFile` object instead. Removal on 2020-04-01 UTC. */
  sha256?: Maybe<Scalars['String']>;
  /** @deprecated Renaming GitHub Packages fields and objects. Use the `PackageFile` object instead. Removal on 2020-04-01 UTC. */
  size?: Maybe<Scalars['Int']>;
  updatedAt: Scalars['DateTime'];
  /** @deprecated Renaming GitHub Packages fields and objects. Use the `PackageFile` object instead. Removal on 2020-04-01 UTC. */
  url: Scalars['URI'];
};

export type RegistryPackageFileConnection = {
   __typename?: 'RegistryPackageFileConnection';
  edges?: Maybe<Array<Maybe<RegistryPackageFileEdge>>>;
  nodes?: Maybe<Array<Maybe<RegistryPackageFile>>>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type RegistryPackageFileEdge = {
   __typename?: 'RegistryPackageFileEdge';
  cursor: Scalars['String'];
  node?: Maybe<RegistryPackageFile>;
};

export type RegistryPackageMetadatum = {
  name: Scalars['String'];
  value: Scalars['String'];
  update?: Maybe<Scalars['Boolean']>;
};

export type RegistryPackageOwner = {
  id: Scalars['ID'];
  /** @deprecated Renaming GitHub Packages fields and objects. Use the `PackageOwner` object instead. Removal on 2020-04-01 UTC. */
  registryPackages: RegistryPackageConnection;
};


export type RegistryPackageOwnerRegistryPackagesArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  names?: Maybe<Array<Maybe<Scalars['String']>>>;
  repositoryId?: Maybe<Scalars['ID']>;
  packageType?: Maybe<RegistryPackageType>;
  registryPackageType?: Maybe<Scalars['String']>;
  publicOnly?: Maybe<Scalars['Boolean']>;
};

export type RegistryPackageSearch = {
  id: Scalars['ID'];
  /** @deprecated Renaming GitHub Packages fields and objects. Use the `PackageSearch` object instead. Removal on 2020-04-01 UTC. */
  registryPackagesForQuery: RegistryPackageConnection;
};


export type RegistryPackageSearchRegistryPackagesForQueryArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  query?: Maybe<Scalars['String']>;
  packageType?: Maybe<RegistryPackageType>;
};

export type RegistryPackageStatistics = {
   __typename?: 'RegistryPackageStatistics';
  /** @deprecated Renaming GitHub Packages fields and objects. Use the `PackageStatistics` object instead. Removal on 2020-04-01 UTC. */
  downloadsThisMonth: Scalars['Int'];
  /** @deprecated Renaming GitHub Packages fields and objects. Use the `PackageStatistics` object instead. Removal on 2020-04-01 UTC. */
  downloadsThisWeek: Scalars['Int'];
  /** @deprecated Renaming GitHub Packages fields and objects. Use the `PackageStatistics` object instead. Removal on 2020-04-01 UTC. */
  downloadsThisYear: Scalars['Int'];
  /** @deprecated Renaming GitHub Packages fields and objects. Use the `PackageStatistics` object instead. Removal on 2020-04-01 UTC. */
  downloadsToday: Scalars['Int'];
  /** @deprecated Renaming GitHub Packages fields and objects. Use the `PackageStatistics` object instead. Removal on 2020-04-01 UTC. */
  downloadsTotalCount: Scalars['Int'];
};

export type RegistryPackageTag = Node & {
   __typename?: 'RegistryPackageTag';
  id: Scalars['ID'];
  /** @deprecated Renaming GitHub Packages fields and objects. Use the `PackageTag` object instead. Removal on 2020-04-01 UTC. */
  name: Scalars['String'];
  /** @deprecated Renaming GitHub Packages fields and objects. Use the `PackageTag` object instead. Removal on 2020-04-01 UTC. */
  version?: Maybe<RegistryPackageVersion>;
};

export type RegistryPackageTagConnection = {
   __typename?: 'RegistryPackageTagConnection';
  edges?: Maybe<Array<Maybe<RegistryPackageTagEdge>>>;
  nodes?: Maybe<Array<Maybe<RegistryPackageTag>>>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type RegistryPackageTagEdge = {
   __typename?: 'RegistryPackageTagEdge';
  cursor: Scalars['String'];
  node?: Maybe<RegistryPackageTag>;
};

export enum RegistryPackageType {
  Npm = 'NPM',
  Rubygems = 'RUBYGEMS',
  Maven = 'MAVEN',
  Docker = 'DOCKER',
  Debian = 'DEBIAN',
  Nuget = 'NUGET',
  Python = 'PYTHON'
}

export type RegistryPackageVersion = Node & {
   __typename?: 'RegistryPackageVersion';
  /** @deprecated Renaming GitHub Packages fields and objects. Use the `PackageVersion` object instead. Removal on 2020-04-01 UTC. */
  dependencies: RegistryPackageDependencyConnection;
  /** @deprecated Renaming GitHub Packages fields and objects. Use the `PackageVersion` object instead. Removal on 2020-04-01 UTC. */
  fileByName?: Maybe<RegistryPackageFile>;
  /** @deprecated Renaming GitHub Packages fields and objects. Use the `PackageVersion` object instead. Removal on 2020-04-01 UTC. */
  files: RegistryPackageFileConnection;
  id: Scalars['ID'];
  /** @deprecated Renaming GitHub Packages fields and objects. Use the `PackageVersion` object instead. Removal on 2020-04-01 UTC. */
  installationCommand?: Maybe<Scalars['String']>;
  /** @deprecated Renaming GitHub Packages fields and objects. Use the `PackageVersion` object instead. Removal on 2020-04-01 UTC. */
  manifest?: Maybe<Scalars['String']>;
  /** @deprecated Renaming GitHub Packages fields and objects. Use the `PackageVersion` object instead. Removal on 2020-04-01 UTC. */
  platform?: Maybe<Scalars['String']>;
  /** @deprecated Renaming GitHub Packages fields and objects. Use the `PackageVersion` object instead. Removal on 2020-04-01 UTC. */
  preRelease: Scalars['Boolean'];
  /** @deprecated Renaming GitHub Packages fields and objects. Use the `PackageVersion` object instead. Removal on 2020-04-01 UTC. */
  readme?: Maybe<Scalars['String']>;
  /** @deprecated Renaming GitHub Packages fields and objects. Use the `PackageVersion` object instead. Removal on 2020-04-01 UTC. */
  readmeHtml?: Maybe<Scalars['HTML']>;
  /** @deprecated Renaming GitHub Packages fields and objects. Use the `PackageVersion` object instead. Removal on 2020-04-01 UTC. */
  registryPackage?: Maybe<RegistryPackage>;
  /** @deprecated Renaming GitHub Packages fields and objects. Use the `PackageVersion` object instead. Removal on 2020-04-01 UTC. */
  release?: Maybe<Release>;
  /** @deprecated Renaming GitHub Packages fields and objects. Use the `PackageVersion` object instead. Removal on 2020-04-01 UTC. */
  sha256?: Maybe<Scalars['String']>;
  /** @deprecated Renaming GitHub Packages fields and objects. Use the `PackageVersion` object instead. Removal on 2020-04-01 UTC. */
  size?: Maybe<Scalars['Int']>;
  /** @deprecated Renaming GitHub Packages fields and objects. Use the `PackageVersion` object instead. Removal on 2020-04-01 UTC. */
  statistics?: Maybe<RegistryPackageVersionStatistics>;
  /** @deprecated Renaming GitHub Packages fields and objects. Use the `PackageVersion` object instead. Removal on 2020-04-01 UTC. */
  summary?: Maybe<Scalars['String']>;
  /** @deprecated Renaming GitHub Packages fields and objects. Use the `PackageVersion` object instead. Removal on 2020-04-01 UTC. */
  updatedAt: Scalars['DateTime'];
  /** @deprecated Renaming GitHub Packages fields and objects. Use the `PackageVersion` object instead. Removal on 2020-04-01 UTC. */
  version: Scalars['String'];
  /** @deprecated Renaming GitHub Packages fields and objects. Use the `PackageVersion` object instead. Removal on 2020-04-01 UTC. */
  viewerCanEdit: Scalars['Boolean'];
};


export type RegistryPackageVersionDependenciesArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  type?: Maybe<RegistryPackageDependencyType>;
};


export type RegistryPackageVersionFileByNameArgs = {
  filename: Scalars['String'];
};


export type RegistryPackageVersionFilesArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};

export type RegistryPackageVersionConnection = {
   __typename?: 'RegistryPackageVersionConnection';
  edges?: Maybe<Array<Maybe<RegistryPackageVersionEdge>>>;
  nodes?: Maybe<Array<Maybe<RegistryPackageVersion>>>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type RegistryPackageVersionEdge = {
   __typename?: 'RegistryPackageVersionEdge';
  cursor: Scalars['String'];
  node?: Maybe<RegistryPackageVersion>;
};

export type RegistryPackageVersionStatistics = {
   __typename?: 'RegistryPackageVersionStatistics';
  /** @deprecated Renaming GitHub Packages fields and objects. Use the `PackageVersionStatistics` object instead. Removal on 2020-04-01 UTC. */
  downloadsThisMonth: Scalars['Int'];
  /** @deprecated Renaming GitHub Packages fields and objects. Use the `PackageVersionStatistics` object instead. Removal on 2020-04-01 UTC. */
  downloadsThisWeek: Scalars['Int'];
  /** @deprecated Renaming GitHub Packages fields and objects. Use the `PackageVersionStatistics` object instead. Removal on 2020-04-01 UTC. */
  downloadsThisYear: Scalars['Int'];
  /** @deprecated Renaming GitHub Packages fields and objects. Use the `PackageVersionStatistics` object instead. Removal on 2020-04-01 UTC. */
  downloadsToday: Scalars['Int'];
  /** @deprecated Renaming GitHub Packages fields and objects. Use the `PackageVersionStatistics` object instead. Removal on 2020-04-01 UTC. */
  downloadsTotalCount: Scalars['Int'];
};

export type Release = Node & UniformResourceLocatable & {
   __typename?: 'Release';
  author?: Maybe<User>;
  createdAt: Scalars['DateTime'];
  description?: Maybe<Scalars['String']>;
  descriptionHTML?: Maybe<Scalars['HTML']>;
  id: Scalars['ID'];
  isDraft: Scalars['Boolean'];
  isPrerelease: Scalars['Boolean'];
  name?: Maybe<Scalars['String']>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  releaseAssets: ReleaseAssetConnection;
  resourcePath: Scalars['URI'];
  shortDescriptionHTML?: Maybe<Scalars['HTML']>;
  tag?: Maybe<Ref>;
  tagName: Scalars['String'];
  updatedAt: Scalars['DateTime'];
  url: Scalars['URI'];
};


export type ReleaseReleaseAssetsArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
};


export type ReleaseShortDescriptionHtmlArgs = {
  limit?: Maybe<Scalars['Int']>;
};

export type ReleaseAsset = Node & {
   __typename?: 'ReleaseAsset';
  contentType: Scalars['String'];
  createdAt: Scalars['DateTime'];
  downloadCount: Scalars['Int'];
  downloadUrl: Scalars['URI'];
  id: Scalars['ID'];
  name: Scalars['String'];
  release?: Maybe<Release>;
  size: Scalars['Int'];
  updatedAt: Scalars['DateTime'];
  uploadedBy: User;
  url: Scalars['URI'];
};

export type ReleaseAssetConnection = {
   __typename?: 'ReleaseAssetConnection';
  edges?: Maybe<Array<Maybe<ReleaseAssetEdge>>>;
  nodes?: Maybe<Array<Maybe<ReleaseAsset>>>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type ReleaseAssetEdge = {
   __typename?: 'ReleaseAssetEdge';
  cursor: Scalars['String'];
  node?: Maybe<ReleaseAsset>;
};

export type ReleaseConnection = {
   __typename?: 'ReleaseConnection';
  edges?: Maybe<Array<Maybe<ReleaseEdge>>>;
  nodes?: Maybe<Array<Maybe<Release>>>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type ReleaseEdge = {
   __typename?: 'ReleaseEdge';
  cursor: Scalars['String'];
  node?: Maybe<Release>;
};

export type ReleaseOrder = {
  field: ReleaseOrderField;
  direction: OrderDirection;
};

export enum ReleaseOrderField {
  CreatedAt = 'CREATED_AT',
  Name = 'NAME'
}

export type RemoveAssigneesFromAssignableInput = {
  assignableId: Scalars['ID'];
  assigneeIds: Array<Scalars['ID']>;
  clientMutationId?: Maybe<Scalars['String']>;
};

export type RemoveAssigneesFromAssignablePayload = {
   __typename?: 'RemoveAssigneesFromAssignablePayload';
  assignable?: Maybe<Assignable>;
  clientMutationId?: Maybe<Scalars['String']>;
};

export type RemovedFromProjectEvent = Node & {
   __typename?: 'RemovedFromProjectEvent';
  actor?: Maybe<Actor>;
  createdAt: Scalars['DateTime'];
  databaseId?: Maybe<Scalars['Int']>;
  id: Scalars['ID'];
};

export type RemoveEnterpriseAdminInput = {
  enterpriseId: Scalars['ID'];
  login: Scalars['String'];
  clientMutationId?: Maybe<Scalars['String']>;
};

export type RemoveEnterpriseAdminPayload = {
   __typename?: 'RemoveEnterpriseAdminPayload';
  admin?: Maybe<User>;
  clientMutationId?: Maybe<Scalars['String']>;
  enterprise?: Maybe<Enterprise>;
  message?: Maybe<Scalars['String']>;
  viewer?: Maybe<User>;
};

export type RemoveEnterpriseIdentityProviderInput = {
  enterpriseId: Scalars['ID'];
  clientMutationId?: Maybe<Scalars['String']>;
};

export type RemoveEnterpriseIdentityProviderPayload = {
   __typename?: 'RemoveEnterpriseIdentityProviderPayload';
  clientMutationId?: Maybe<Scalars['String']>;
  identityProvider?: Maybe<EnterpriseIdentityProvider>;
};

export type RemoveEnterpriseOrganizationInput = {
  enterpriseId: Scalars['ID'];
  organizationId: Scalars['ID'];
  clientMutationId?: Maybe<Scalars['String']>;
};

export type RemoveEnterpriseOrganizationPayload = {
   __typename?: 'RemoveEnterpriseOrganizationPayload';
  clientMutationId?: Maybe<Scalars['String']>;
  enterprise?: Maybe<Enterprise>;
  organization?: Maybe<Organization>;
  viewer?: Maybe<User>;
};

export type RemoveLabelsFromLabelableInput = {
  labelableId: Scalars['ID'];
  labelIds: Array<Scalars['ID']>;
  clientMutationId?: Maybe<Scalars['String']>;
};

export type RemoveLabelsFromLabelablePayload = {
   __typename?: 'RemoveLabelsFromLabelablePayload';
  clientMutationId?: Maybe<Scalars['String']>;
  labelable?: Maybe<Labelable>;
};

export type RemoveOutsideCollaboratorInput = {
  userId: Scalars['ID'];
  organizationId: Scalars['ID'];
  clientMutationId?: Maybe<Scalars['String']>;
};

export type RemoveOutsideCollaboratorPayload = {
   __typename?: 'RemoveOutsideCollaboratorPayload';
  clientMutationId?: Maybe<Scalars['String']>;
  removedUser?: Maybe<User>;
};

export type RemoveReactionInput = {
  subjectId: Scalars['ID'];
  content: ReactionContent;
  clientMutationId?: Maybe<Scalars['String']>;
};

export type RemoveReactionPayload = {
   __typename?: 'RemoveReactionPayload';
  clientMutationId?: Maybe<Scalars['String']>;
  reaction?: Maybe<Reaction>;
  subject?: Maybe<Reactable>;
};

export type RemoveStarInput = {
  starrableId: Scalars['ID'];
  clientMutationId?: Maybe<Scalars['String']>;
};

export type RemoveStarPayload = {
   __typename?: 'RemoveStarPayload';
  clientMutationId?: Maybe<Scalars['String']>;
  starrable?: Maybe<Starrable>;
};

export type RenamedTitleEvent = Node & {
   __typename?: 'RenamedTitleEvent';
  actor?: Maybe<Actor>;
  createdAt: Scalars['DateTime'];
  currentTitle: Scalars['String'];
  id: Scalars['ID'];
  previousTitle: Scalars['String'];
  subject: RenamedTitleSubject;
};

export type RenamedTitleSubject = Issue | PullRequest;

export type ReopenedEvent = Node & {
   __typename?: 'ReopenedEvent';
  actor?: Maybe<Actor>;
  closable: Closable;
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
};

export type ReopenIssueInput = {
  issueId: Scalars['ID'];
  clientMutationId?: Maybe<Scalars['String']>;
};

export type ReopenIssuePayload = {
   __typename?: 'ReopenIssuePayload';
  clientMutationId?: Maybe<Scalars['String']>;
  issue?: Maybe<Issue>;
};

export type ReopenPullRequestInput = {
  pullRequestId: Scalars['ID'];
  clientMutationId?: Maybe<Scalars['String']>;
};

export type ReopenPullRequestPayload = {
   __typename?: 'ReopenPullRequestPayload';
  clientMutationId?: Maybe<Scalars['String']>;
  pullRequest?: Maybe<PullRequest>;
};

export type RepoAccessAuditEntry = Node & AuditEntry & OrganizationAuditEntryData & RepositoryAuditEntryData & {
   __typename?: 'RepoAccessAuditEntry';
  action: Scalars['String'];
  actor?: Maybe<AuditEntryActor>;
  actorIp?: Maybe<Scalars['String']>;
  actorLocation?: Maybe<ActorLocation>;
  actorLogin?: Maybe<Scalars['String']>;
  actorResourcePath?: Maybe<Scalars['URI']>;
  actorUrl?: Maybe<Scalars['URI']>;
  createdAt: Scalars['PreciseDateTime'];
  id: Scalars['ID'];
  operationType?: Maybe<OperationType>;
  organization?: Maybe<Organization>;
  organizationName?: Maybe<Scalars['String']>;
  organizationResourcePath?: Maybe<Scalars['URI']>;
  organizationUrl?: Maybe<Scalars['URI']>;
  repository?: Maybe<Repository>;
  repositoryName?: Maybe<Scalars['String']>;
  repositoryResourcePath?: Maybe<Scalars['URI']>;
  repositoryUrl?: Maybe<Scalars['URI']>;
  user?: Maybe<User>;
  userLogin?: Maybe<Scalars['String']>;
  userResourcePath?: Maybe<Scalars['URI']>;
  userUrl?: Maybe<Scalars['URI']>;
  visibility?: Maybe<RepoAccessAuditEntryVisibility>;
};

export enum RepoAccessAuditEntryVisibility {
  Internal = 'INTERNAL',
  Private = 'PRIVATE',
  Public = 'PUBLIC'
}

export type RepoAddMemberAuditEntry = Node & AuditEntry & OrganizationAuditEntryData & RepositoryAuditEntryData & {
   __typename?: 'RepoAddMemberAuditEntry';
  action: Scalars['String'];
  actor?: Maybe<AuditEntryActor>;
  actorIp?: Maybe<Scalars['String']>;
  actorLocation?: Maybe<ActorLocation>;
  actorLogin?: Maybe<Scalars['String']>;
  actorResourcePath?: Maybe<Scalars['URI']>;
  actorUrl?: Maybe<Scalars['URI']>;
  createdAt: Scalars['PreciseDateTime'];
  id: Scalars['ID'];
  operationType?: Maybe<OperationType>;
  organization?: Maybe<Organization>;
  organizationName?: Maybe<Scalars['String']>;
  organizationResourcePath?: Maybe<Scalars['URI']>;
  organizationUrl?: Maybe<Scalars['URI']>;
  repository?: Maybe<Repository>;
  repositoryName?: Maybe<Scalars['String']>;
  repositoryResourcePath?: Maybe<Scalars['URI']>;
  repositoryUrl?: Maybe<Scalars['URI']>;
  user?: Maybe<User>;
  userLogin?: Maybe<Scalars['String']>;
  userResourcePath?: Maybe<Scalars['URI']>;
  userUrl?: Maybe<Scalars['URI']>;
  visibility?: Maybe<RepoAddMemberAuditEntryVisibility>;
};

export enum RepoAddMemberAuditEntryVisibility {
  Internal = 'INTERNAL',
  Private = 'PRIVATE',
  Public = 'PUBLIC'
}

export type RepoAddTopicAuditEntry = Node & AuditEntry & RepositoryAuditEntryData & OrganizationAuditEntryData & TopicAuditEntryData & {
   __typename?: 'RepoAddTopicAuditEntry';
  action: Scalars['String'];
  actor?: Maybe<AuditEntryActor>;
  actorIp?: Maybe<Scalars['String']>;
  actorLocation?: Maybe<ActorLocation>;
  actorLogin?: Maybe<Scalars['String']>;
  actorResourcePath?: Maybe<Scalars['URI']>;
  actorUrl?: Maybe<Scalars['URI']>;
  createdAt: Scalars['PreciseDateTime'];
  id: Scalars['ID'];
  operationType?: Maybe<OperationType>;
  organization?: Maybe<Organization>;
  organizationName?: Maybe<Scalars['String']>;
  organizationResourcePath?: Maybe<Scalars['URI']>;
  organizationUrl?: Maybe<Scalars['URI']>;
  repository?: Maybe<Repository>;
  repositoryName?: Maybe<Scalars['String']>;
  repositoryResourcePath?: Maybe<Scalars['URI']>;
  repositoryUrl?: Maybe<Scalars['URI']>;
  topic?: Maybe<Topic>;
  topicName?: Maybe<Scalars['String']>;
  user?: Maybe<User>;
  userLogin?: Maybe<Scalars['String']>;
  userResourcePath?: Maybe<Scalars['URI']>;
  userUrl?: Maybe<Scalars['URI']>;
};

export type RepoArchivedAuditEntry = Node & AuditEntry & RepositoryAuditEntryData & OrganizationAuditEntryData & {
   __typename?: 'RepoArchivedAuditEntry';
  action: Scalars['String'];
  actor?: Maybe<AuditEntryActor>;
  actorIp?: Maybe<Scalars['String']>;
  actorLocation?: Maybe<ActorLocation>;
  actorLogin?: Maybe<Scalars['String']>;
  actorResourcePath?: Maybe<Scalars['URI']>;
  actorUrl?: Maybe<Scalars['URI']>;
  createdAt: Scalars['PreciseDateTime'];
  id: Scalars['ID'];
  operationType?: Maybe<OperationType>;
  organization?: Maybe<Organization>;
  organizationName?: Maybe<Scalars['String']>;
  organizationResourcePath?: Maybe<Scalars['URI']>;
  organizationUrl?: Maybe<Scalars['URI']>;
  repository?: Maybe<Repository>;
  repositoryName?: Maybe<Scalars['String']>;
  repositoryResourcePath?: Maybe<Scalars['URI']>;
  repositoryUrl?: Maybe<Scalars['URI']>;
  user?: Maybe<User>;
  userLogin?: Maybe<Scalars['String']>;
  userResourcePath?: Maybe<Scalars['URI']>;
  userUrl?: Maybe<Scalars['URI']>;
  visibility?: Maybe<RepoArchivedAuditEntryVisibility>;
};

export enum RepoArchivedAuditEntryVisibility {
  Internal = 'INTERNAL',
  Private = 'PRIVATE',
  Public = 'PUBLIC'
}

export type RepoChangeMergeSettingAuditEntry = Node & AuditEntry & RepositoryAuditEntryData & OrganizationAuditEntryData & {
   __typename?: 'RepoChangeMergeSettingAuditEntry';
  action: Scalars['String'];
  actor?: Maybe<AuditEntryActor>;
  actorIp?: Maybe<Scalars['String']>;
  actorLocation?: Maybe<ActorLocation>;
  actorLogin?: Maybe<Scalars['String']>;
  actorResourcePath?: Maybe<Scalars['URI']>;
  actorUrl?: Maybe<Scalars['URI']>;
  createdAt: Scalars['PreciseDateTime'];
  id: Scalars['ID'];
  isEnabled?: Maybe<Scalars['Boolean']>;
  mergeType?: Maybe<RepoChangeMergeSettingAuditEntryMergeType>;
  operationType?: Maybe<OperationType>;
  organization?: Maybe<Organization>;
  organizationName?: Maybe<Scalars['String']>;
  organizationResourcePath?: Maybe<Scalars['URI']>;
  organizationUrl?: Maybe<Scalars['URI']>;
  repository?: Maybe<Repository>;
  repositoryName?: Maybe<Scalars['String']>;
  repositoryResourcePath?: Maybe<Scalars['URI']>;
  repositoryUrl?: Maybe<Scalars['URI']>;
  user?: Maybe<User>;
  userLogin?: Maybe<Scalars['String']>;
  userResourcePath?: Maybe<Scalars['URI']>;
  userUrl?: Maybe<Scalars['URI']>;
};

export enum RepoChangeMergeSettingAuditEntryMergeType {
  Merge = 'MERGE',
  Rebase = 'REBASE',
  Squash = 'SQUASH'
}

export type RepoConfigDisableAnonymousGitAccessAuditEntry = Node & AuditEntry & OrganizationAuditEntryData & RepositoryAuditEntryData & {
   __typename?: 'RepoConfigDisableAnonymousGitAccessAuditEntry';
  action: Scalars['String'];
  actor?: Maybe<AuditEntryActor>;
  actorIp?: Maybe<Scalars['String']>;
  actorLocation?: Maybe<ActorLocation>;
  actorLogin?: Maybe<Scalars['String']>;
  actorResourcePath?: Maybe<Scalars['URI']>;
  actorUrl?: Maybe<Scalars['URI']>;
  createdAt: Scalars['PreciseDateTime'];
  id: Scalars['ID'];
  operationType?: Maybe<OperationType>;
  organization?: Maybe<Organization>;
  organizationName?: Maybe<Scalars['String']>;
  organizationResourcePath?: Maybe<Scalars['URI']>;
  organizationUrl?: Maybe<Scalars['URI']>;
  repository?: Maybe<Repository>;
  repositoryName?: Maybe<Scalars['String']>;
  repositoryResourcePath?: Maybe<Scalars['URI']>;
  repositoryUrl?: Maybe<Scalars['URI']>;
  user?: Maybe<User>;
  userLogin?: Maybe<Scalars['String']>;
  userResourcePath?: Maybe<Scalars['URI']>;
  userUrl?: Maybe<Scalars['URI']>;
};

export type RepoConfigDisableCollaboratorsOnlyAuditEntry = Node & AuditEntry & OrganizationAuditEntryData & RepositoryAuditEntryData & {
   __typename?: 'RepoConfigDisableCollaboratorsOnlyAuditEntry';
  action: Scalars['String'];
  actor?: Maybe<AuditEntryActor>;
  actorIp?: Maybe<Scalars['String']>;
  actorLocation?: Maybe<ActorLocation>;
  actorLogin?: Maybe<Scalars['String']>;
  actorResourcePath?: Maybe<Scalars['URI']>;
  actorUrl?: Maybe<Scalars['URI']>;
  createdAt: Scalars['PreciseDateTime'];
  id: Scalars['ID'];
  operationType?: Maybe<OperationType>;
  organization?: Maybe<Organization>;
  organizationName?: Maybe<Scalars['String']>;
  organizationResourcePath?: Maybe<Scalars['URI']>;
  organizationUrl?: Maybe<Scalars['URI']>;
  repository?: Maybe<Repository>;
  repositoryName?: Maybe<Scalars['String']>;
  repositoryResourcePath?: Maybe<Scalars['URI']>;
  repositoryUrl?: Maybe<Scalars['URI']>;
  user?: Maybe<User>;
  userLogin?: Maybe<Scalars['String']>;
  userResourcePath?: Maybe<Scalars['URI']>;
  userUrl?: Maybe<Scalars['URI']>;
};

export type RepoConfigDisableContributorsOnlyAuditEntry = Node & AuditEntry & OrganizationAuditEntryData & RepositoryAuditEntryData & {
   __typename?: 'RepoConfigDisableContributorsOnlyAuditEntry';
  action: Scalars['String'];
  actor?: Maybe<AuditEntryActor>;
  actorIp?: Maybe<Scalars['String']>;
  actorLocation?: Maybe<ActorLocation>;
  actorLogin?: Maybe<Scalars['String']>;
  actorResourcePath?: Maybe<Scalars['URI']>;
  actorUrl?: Maybe<Scalars['URI']>;
  createdAt: Scalars['PreciseDateTime'];
  id: Scalars['ID'];
  operationType?: Maybe<OperationType>;
  organization?: Maybe<Organization>;
  organizationName?: Maybe<Scalars['String']>;
  organizationResourcePath?: Maybe<Scalars['URI']>;
  organizationUrl?: Maybe<Scalars['URI']>;
  repository?: Maybe<Repository>;
  repositoryName?: Maybe<Scalars['String']>;
  repositoryResourcePath?: Maybe<Scalars['URI']>;
  repositoryUrl?: Maybe<Scalars['URI']>;
  user?: Maybe<User>;
  userLogin?: Maybe<Scalars['String']>;
  userResourcePath?: Maybe<Scalars['URI']>;
  userUrl?: Maybe<Scalars['URI']>;
};

export type RepoConfigDisableSockpuppetDisallowedAuditEntry = Node & AuditEntry & OrganizationAuditEntryData & RepositoryAuditEntryData & {
   __typename?: 'RepoConfigDisableSockpuppetDisallowedAuditEntry';
  action: Scalars['String'];
  actor?: Maybe<AuditEntryActor>;
  actorIp?: Maybe<Scalars['String']>;
  actorLocation?: Maybe<ActorLocation>;
  actorLogin?: Maybe<Scalars['String']>;
  actorResourcePath?: Maybe<Scalars['URI']>;
  actorUrl?: Maybe<Scalars['URI']>;
  createdAt: Scalars['PreciseDateTime'];
  id: Scalars['ID'];
  operationType?: Maybe<OperationType>;
  organization?: Maybe<Organization>;
  organizationName?: Maybe<Scalars['String']>;
  organizationResourcePath?: Maybe<Scalars['URI']>;
  organizationUrl?: Maybe<Scalars['URI']>;
  repository?: Maybe<Repository>;
  repositoryName?: Maybe<Scalars['String']>;
  repositoryResourcePath?: Maybe<Scalars['URI']>;
  repositoryUrl?: Maybe<Scalars['URI']>;
  user?: Maybe<User>;
  userLogin?: Maybe<Scalars['String']>;
  userResourcePath?: Maybe<Scalars['URI']>;
  userUrl?: Maybe<Scalars['URI']>;
};

export type RepoConfigEnableAnonymousGitAccessAuditEntry = Node & AuditEntry & OrganizationAuditEntryData & RepositoryAuditEntryData & {
   __typename?: 'RepoConfigEnableAnonymousGitAccessAuditEntry';
  action: Scalars['String'];
  actor?: Maybe<AuditEntryActor>;
  actorIp?: Maybe<Scalars['String']>;
  actorLocation?: Maybe<ActorLocation>;
  actorLogin?: Maybe<Scalars['String']>;
  actorResourcePath?: Maybe<Scalars['URI']>;
  actorUrl?: Maybe<Scalars['URI']>;
  createdAt: Scalars['PreciseDateTime'];
  id: Scalars['ID'];
  operationType?: Maybe<OperationType>;
  organization?: Maybe<Organization>;
  organizationName?: Maybe<Scalars['String']>;
  organizationResourcePath?: Maybe<Scalars['URI']>;
  organizationUrl?: Maybe<Scalars['URI']>;
  repository?: Maybe<Repository>;
  repositoryName?: Maybe<Scalars['String']>;
  repositoryResourcePath?: Maybe<Scalars['URI']>;
  repositoryUrl?: Maybe<Scalars['URI']>;
  user?: Maybe<User>;
  userLogin?: Maybe<Scalars['String']>;
  userResourcePath?: Maybe<Scalars['URI']>;
  userUrl?: Maybe<Scalars['URI']>;
};

export type RepoConfigEnableCollaboratorsOnlyAuditEntry = Node & AuditEntry & OrganizationAuditEntryData & RepositoryAuditEntryData & {
   __typename?: 'RepoConfigEnableCollaboratorsOnlyAuditEntry';
  action: Scalars['String'];
  actor?: Maybe<AuditEntryActor>;
  actorIp?: Maybe<Scalars['String']>;
  actorLocation?: Maybe<ActorLocation>;
  actorLogin?: Maybe<Scalars['String']>;
  actorResourcePath?: Maybe<Scalars['URI']>;
  actorUrl?: Maybe<Scalars['URI']>;
  createdAt: Scalars['PreciseDateTime'];
  id: Scalars['ID'];
  operationType?: Maybe<OperationType>;
  organization?: Maybe<Organization>;
  organizationName?: Maybe<Scalars['String']>;
  organizationResourcePath?: Maybe<Scalars['URI']>;
  organizationUrl?: Maybe<Scalars['URI']>;
  repository?: Maybe<Repository>;
  repositoryName?: Maybe<Scalars['String']>;
  repositoryResourcePath?: Maybe<Scalars['URI']>;
  repositoryUrl?: Maybe<Scalars['URI']>;
  user?: Maybe<User>;
  userLogin?: Maybe<Scalars['String']>;
  userResourcePath?: Maybe<Scalars['URI']>;
  userUrl?: Maybe<Scalars['URI']>;
};

export type RepoConfigEnableContributorsOnlyAuditEntry = Node & AuditEntry & OrganizationAuditEntryData & RepositoryAuditEntryData & {
   __typename?: 'RepoConfigEnableContributorsOnlyAuditEntry';
  action: Scalars['String'];
  actor?: Maybe<AuditEntryActor>;
  actorIp?: Maybe<Scalars['String']>;
  actorLocation?: Maybe<ActorLocation>;
  actorLogin?: Maybe<Scalars['String']>;
  actorResourcePath?: Maybe<Scalars['URI']>;
  actorUrl?: Maybe<Scalars['URI']>;
  createdAt: Scalars['PreciseDateTime'];
  id: Scalars['ID'];
  operationType?: Maybe<OperationType>;
  organization?: Maybe<Organization>;
  organizationName?: Maybe<Scalars['String']>;
  organizationResourcePath?: Maybe<Scalars['URI']>;
  organizationUrl?: Maybe<Scalars['URI']>;
  repository?: Maybe<Repository>;
  repositoryName?: Maybe<Scalars['String']>;
  repositoryResourcePath?: Maybe<Scalars['URI']>;
  repositoryUrl?: Maybe<Scalars['URI']>;
  user?: Maybe<User>;
  userLogin?: Maybe<Scalars['String']>;
  userResourcePath?: Maybe<Scalars['URI']>;
  userUrl?: Maybe<Scalars['URI']>;
};

export type RepoConfigEnableSockpuppetDisallowedAuditEntry = Node & AuditEntry & OrganizationAuditEntryData & RepositoryAuditEntryData & {
   __typename?: 'RepoConfigEnableSockpuppetDisallowedAuditEntry';
  action: Scalars['String'];
  actor?: Maybe<AuditEntryActor>;
  actorIp?: Maybe<Scalars['String']>;
  actorLocation?: Maybe<ActorLocation>;
  actorLogin?: Maybe<Scalars['String']>;
  actorResourcePath?: Maybe<Scalars['URI']>;
  actorUrl?: Maybe<Scalars['URI']>;
  createdAt: Scalars['PreciseDateTime'];
  id: Scalars['ID'];
  operationType?: Maybe<OperationType>;
  organization?: Maybe<Organization>;
  organizationName?: Maybe<Scalars['String']>;
  organizationResourcePath?: Maybe<Scalars['URI']>;
  organizationUrl?: Maybe<Scalars['URI']>;
  repository?: Maybe<Repository>;
  repositoryName?: Maybe<Scalars['String']>;
  repositoryResourcePath?: Maybe<Scalars['URI']>;
  repositoryUrl?: Maybe<Scalars['URI']>;
  user?: Maybe<User>;
  userLogin?: Maybe<Scalars['String']>;
  userResourcePath?: Maybe<Scalars['URI']>;
  userUrl?: Maybe<Scalars['URI']>;
};

export type RepoConfigLockAnonymousGitAccessAuditEntry = Node & AuditEntry & OrganizationAuditEntryData & RepositoryAuditEntryData & {
   __typename?: 'RepoConfigLockAnonymousGitAccessAuditEntry';
  action: Scalars['String'];
  actor?: Maybe<AuditEntryActor>;
  actorIp?: Maybe<Scalars['String']>;
  actorLocation?: Maybe<ActorLocation>;
  actorLogin?: Maybe<Scalars['String']>;
  actorResourcePath?: Maybe<Scalars['URI']>;
  actorUrl?: Maybe<Scalars['URI']>;
  createdAt: Scalars['PreciseDateTime'];
  id: Scalars['ID'];
  operationType?: Maybe<OperationType>;
  organization?: Maybe<Organization>;
  organizationName?: Maybe<Scalars['String']>;
  organizationResourcePath?: Maybe<Scalars['URI']>;
  organizationUrl?: Maybe<Scalars['URI']>;
  repository?: Maybe<Repository>;
  repositoryName?: Maybe<Scalars['String']>;
  repositoryResourcePath?: Maybe<Scalars['URI']>;
  repositoryUrl?: Maybe<Scalars['URI']>;
  user?: Maybe<User>;
  userLogin?: Maybe<Scalars['String']>;
  userResourcePath?: Maybe<Scalars['URI']>;
  userUrl?: Maybe<Scalars['URI']>;
};

export type RepoConfigUnlockAnonymousGitAccessAuditEntry = Node & AuditEntry & OrganizationAuditEntryData & RepositoryAuditEntryData & {
   __typename?: 'RepoConfigUnlockAnonymousGitAccessAuditEntry';
  action: Scalars['String'];
  actor?: Maybe<AuditEntryActor>;
  actorIp?: Maybe<Scalars['String']>;
  actorLocation?: Maybe<ActorLocation>;
  actorLogin?: Maybe<Scalars['String']>;
  actorResourcePath?: Maybe<Scalars['URI']>;
  actorUrl?: Maybe<Scalars['URI']>;
  createdAt: Scalars['PreciseDateTime'];
  id: Scalars['ID'];
  operationType?: Maybe<OperationType>;
  organization?: Maybe<Organization>;
  organizationName?: Maybe<Scalars['String']>;
  organizationResourcePath?: Maybe<Scalars['URI']>;
  organizationUrl?: Maybe<Scalars['URI']>;
  repository?: Maybe<Repository>;
  repositoryName?: Maybe<Scalars['String']>;
  repositoryResourcePath?: Maybe<Scalars['URI']>;
  repositoryUrl?: Maybe<Scalars['URI']>;
  user?: Maybe<User>;
  userLogin?: Maybe<Scalars['String']>;
  userResourcePath?: Maybe<Scalars['URI']>;
  userUrl?: Maybe<Scalars['URI']>;
};

export type RepoCreateAuditEntry = Node & AuditEntry & RepositoryAuditEntryData & OrganizationAuditEntryData & {
   __typename?: 'RepoCreateAuditEntry';
  action: Scalars['String'];
  actor?: Maybe<AuditEntryActor>;
  actorIp?: Maybe<Scalars['String']>;
  actorLocation?: Maybe<ActorLocation>;
  actorLogin?: Maybe<Scalars['String']>;
  actorResourcePath?: Maybe<Scalars['URI']>;
  actorUrl?: Maybe<Scalars['URI']>;
  createdAt: Scalars['PreciseDateTime'];
  forkParentName?: Maybe<Scalars['String']>;
  forkSourceName?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  operationType?: Maybe<OperationType>;
  organization?: Maybe<Organization>;
  organizationName?: Maybe<Scalars['String']>;
  organizationResourcePath?: Maybe<Scalars['URI']>;
  organizationUrl?: Maybe<Scalars['URI']>;
  repository?: Maybe<Repository>;
  repositoryName?: Maybe<Scalars['String']>;
  repositoryResourcePath?: Maybe<Scalars['URI']>;
  repositoryUrl?: Maybe<Scalars['URI']>;
  user?: Maybe<User>;
  userLogin?: Maybe<Scalars['String']>;
  userResourcePath?: Maybe<Scalars['URI']>;
  userUrl?: Maybe<Scalars['URI']>;
  visibility?: Maybe<RepoCreateAuditEntryVisibility>;
};

export enum RepoCreateAuditEntryVisibility {
  Internal = 'INTERNAL',
  Private = 'PRIVATE',
  Public = 'PUBLIC'
}

export type RepoDestroyAuditEntry = Node & AuditEntry & RepositoryAuditEntryData & OrganizationAuditEntryData & {
   __typename?: 'RepoDestroyAuditEntry';
  action: Scalars['String'];
  actor?: Maybe<AuditEntryActor>;
  actorIp?: Maybe<Scalars['String']>;
  actorLocation?: Maybe<ActorLocation>;
  actorLogin?: Maybe<Scalars['String']>;
  actorResourcePath?: Maybe<Scalars['URI']>;
  actorUrl?: Maybe<Scalars['URI']>;
  createdAt: Scalars['PreciseDateTime'];
  id: Scalars['ID'];
  operationType?: Maybe<OperationType>;
  organization?: Maybe<Organization>;
  organizationName?: Maybe<Scalars['String']>;
  organizationResourcePath?: Maybe<Scalars['URI']>;
  organizationUrl?: Maybe<Scalars['URI']>;
  repository?: Maybe<Repository>;
  repositoryName?: Maybe<Scalars['String']>;
  repositoryResourcePath?: Maybe<Scalars['URI']>;
  repositoryUrl?: Maybe<Scalars['URI']>;
  user?: Maybe<User>;
  userLogin?: Maybe<Scalars['String']>;
  userResourcePath?: Maybe<Scalars['URI']>;
  userUrl?: Maybe<Scalars['URI']>;
  visibility?: Maybe<RepoDestroyAuditEntryVisibility>;
};

export enum RepoDestroyAuditEntryVisibility {
  Internal = 'INTERNAL',
  Private = 'PRIVATE',
  Public = 'PUBLIC'
}

export type RepoRemoveMemberAuditEntry = Node & AuditEntry & OrganizationAuditEntryData & RepositoryAuditEntryData & {
   __typename?: 'RepoRemoveMemberAuditEntry';
  action: Scalars['String'];
  actor?: Maybe<AuditEntryActor>;
  actorIp?: Maybe<Scalars['String']>;
  actorLocation?: Maybe<ActorLocation>;
  actorLogin?: Maybe<Scalars['String']>;
  actorResourcePath?: Maybe<Scalars['URI']>;
  actorUrl?: Maybe<Scalars['URI']>;
  createdAt: Scalars['PreciseDateTime'];
  id: Scalars['ID'];
  operationType?: Maybe<OperationType>;
  organization?: Maybe<Organization>;
  organizationName?: Maybe<Scalars['String']>;
  organizationResourcePath?: Maybe<Scalars['URI']>;
  organizationUrl?: Maybe<Scalars['URI']>;
  repository?: Maybe<Repository>;
  repositoryName?: Maybe<Scalars['String']>;
  repositoryResourcePath?: Maybe<Scalars['URI']>;
  repositoryUrl?: Maybe<Scalars['URI']>;
  user?: Maybe<User>;
  userLogin?: Maybe<Scalars['String']>;
  userResourcePath?: Maybe<Scalars['URI']>;
  userUrl?: Maybe<Scalars['URI']>;
  visibility?: Maybe<RepoRemoveMemberAuditEntryVisibility>;
};

export enum RepoRemoveMemberAuditEntryVisibility {
  Internal = 'INTERNAL',
  Private = 'PRIVATE',
  Public = 'PUBLIC'
}

export type RepoRemoveTopicAuditEntry = Node & AuditEntry & RepositoryAuditEntryData & OrganizationAuditEntryData & TopicAuditEntryData & {
   __typename?: 'RepoRemoveTopicAuditEntry';
  action: Scalars['String'];
  actor?: Maybe<AuditEntryActor>;
  actorIp?: Maybe<Scalars['String']>;
  actorLocation?: Maybe<ActorLocation>;
  actorLogin?: Maybe<Scalars['String']>;
  actorResourcePath?: Maybe<Scalars['URI']>;
  actorUrl?: Maybe<Scalars['URI']>;
  createdAt: Scalars['PreciseDateTime'];
  id: Scalars['ID'];
  operationType?: Maybe<OperationType>;
  organization?: Maybe<Organization>;
  organizationName?: Maybe<Scalars['String']>;
  organizationResourcePath?: Maybe<Scalars['URI']>;
  organizationUrl?: Maybe<Scalars['URI']>;
  repository?: Maybe<Repository>;
  repositoryName?: Maybe<Scalars['String']>;
  repositoryResourcePath?: Maybe<Scalars['URI']>;
  repositoryUrl?: Maybe<Scalars['URI']>;
  topic?: Maybe<Topic>;
  topicName?: Maybe<Scalars['String']>;
  user?: Maybe<User>;
  userLogin?: Maybe<Scalars['String']>;
  userResourcePath?: Maybe<Scalars['URI']>;
  userUrl?: Maybe<Scalars['URI']>;
};

export enum ReportedContentClassifiers {
  Spam = 'SPAM',
  Abuse = 'ABUSE',
  OffTopic = 'OFF_TOPIC',
  Outdated = 'OUTDATED',
  Duplicate = 'DUPLICATE',
  Resolved = 'RESOLVED'
}

export type Repository = Node & ProjectOwner & RegistryPackageOwner & RegistryPackageSearch & Subscribable & Starrable & UniformResourceLocatable & RepositoryInfo & {
   __typename?: 'Repository';
  assignableUsers: UserConnection;
  branchProtectionRules: BranchProtectionRuleConnection;
  codeOfConduct?: Maybe<CodeOfConduct>;
  collaborators?: Maybe<RepositoryCollaboratorConnection>;
  commitComments: CommitCommentConnection;
  createdAt: Scalars['DateTime'];
  databaseId?: Maybe<Scalars['Int']>;
  defaultBranchRef?: Maybe<Ref>;
  deleteBranchOnMerge: Scalars['Boolean'];
  deployKeys: DeployKeyConnection;
  deployments: DeploymentConnection;
  description?: Maybe<Scalars['String']>;
  descriptionHTML: Scalars['HTML'];
  diskUsage?: Maybe<Scalars['Int']>;
  forkCount: Scalars['Int'];
  forks: RepositoryConnection;
  fundingLinks: Array<FundingLink>;
  hasIssuesEnabled: Scalars['Boolean'];
  hasProjectsEnabled: Scalars['Boolean'];
  hasWikiEnabled: Scalars['Boolean'];
  homepageUrl?: Maybe<Scalars['URI']>;
  id: Scalars['ID'];
  isArchived: Scalars['Boolean'];
  isDisabled: Scalars['Boolean'];
  isFork: Scalars['Boolean'];
  isLocked: Scalars['Boolean'];
  isMirror: Scalars['Boolean'];
  isPrivate: Scalars['Boolean'];
  isTemplate: Scalars['Boolean'];
  issue?: Maybe<Issue>;
  issueOrPullRequest?: Maybe<IssueOrPullRequest>;
  issues: IssueConnection;
  label?: Maybe<Label>;
  labels?: Maybe<LabelConnection>;
  languages?: Maybe<LanguageConnection>;
  licenseInfo?: Maybe<License>;
  lockReason?: Maybe<RepositoryLockReason>;
  mentionableUsers: UserConnection;
  mergeCommitAllowed: Scalars['Boolean'];
  milestone?: Maybe<Milestone>;
  milestones?: Maybe<MilestoneConnection>;
  mirrorUrl?: Maybe<Scalars['URI']>;
  name: Scalars['String'];
  nameWithOwner: Scalars['String'];
  object?: Maybe<GitObject>;
  openGraphImageUrl: Scalars['URI'];
  owner: RepositoryOwner;
  parent?: Maybe<Repository>;
  primaryLanguage?: Maybe<Language>;
  project?: Maybe<Project>;
  projects: ProjectConnection;
  projectsResourcePath: Scalars['URI'];
  projectsUrl: Scalars['URI'];
  pullRequest?: Maybe<PullRequest>;
  pullRequests: PullRequestConnection;
  pushedAt?: Maybe<Scalars['DateTime']>;
  rebaseMergeAllowed: Scalars['Boolean'];
  ref?: Maybe<Ref>;
  refs?: Maybe<RefConnection>;
  /** @deprecated Renaming GitHub Packages fields and objects. Use the `PackageOwner` object instead. Removal on 2020-04-01 UTC. */
  registryPackages: RegistryPackageConnection;
  /** @deprecated Renaming GitHub Packages fields and objects. Use the `PackageSearch` object instead. Removal on 2020-04-01 UTC. */
  registryPackagesForQuery: RegistryPackageConnection;
  release?: Maybe<Release>;
  releases: ReleaseConnection;
  repositoryTopics: RepositoryTopicConnection;
  resourcePath: Scalars['URI'];
  shortDescriptionHTML: Scalars['HTML'];
  squashMergeAllowed: Scalars['Boolean'];
  sshUrl: Scalars['GitSSHRemote'];
  stargazers: StargazerConnection;
  submodules: SubmoduleConnection;
  tempCloneToken?: Maybe<Scalars['String']>;
  templateRepository?: Maybe<Repository>;
  updatedAt: Scalars['DateTime'];
  url: Scalars['URI'];
  usesCustomOpenGraphImage: Scalars['Boolean'];
  viewerCanAdminister: Scalars['Boolean'];
  viewerCanCreateProjects: Scalars['Boolean'];
  viewerCanSubscribe: Scalars['Boolean'];
  viewerCanUpdateTopics: Scalars['Boolean'];
  viewerHasStarred: Scalars['Boolean'];
  viewerPermission?: Maybe<RepositoryPermission>;
  viewerSubscription?: Maybe<SubscriptionState>;
  vulnerabilityAlerts?: Maybe<RepositoryVulnerabilityAlertConnection>;
  watchers: UserConnection;
};


export type RepositoryAssignableUsersArgs = {
  query?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type RepositoryBranchProtectionRulesArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type RepositoryCollaboratorsArgs = {
  affiliation?: Maybe<CollaboratorAffiliation>;
  query?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type RepositoryCommitCommentsArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type RepositoryDeployKeysArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type RepositoryDeploymentsArgs = {
  environments?: Maybe<Array<Scalars['String']>>;
  orderBy?: Maybe<DeploymentOrder>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type RepositoryForksArgs = {
  privacy?: Maybe<RepositoryPrivacy>;
  orderBy?: Maybe<RepositoryOrder>;
  affiliations?: Maybe<Array<Maybe<RepositoryAffiliation>>>;
  ownerAffiliations?: Maybe<Array<Maybe<RepositoryAffiliation>>>;
  isLocked?: Maybe<Scalars['Boolean']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type RepositoryIssueArgs = {
  number: Scalars['Int'];
};


export type RepositoryIssueOrPullRequestArgs = {
  number: Scalars['Int'];
};


export type RepositoryIssuesArgs = {
  orderBy?: Maybe<IssueOrder>;
  labels?: Maybe<Array<Scalars['String']>>;
  states?: Maybe<Array<IssueState>>;
  filterBy?: Maybe<IssueFilters>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type RepositoryLabelArgs = {
  name: Scalars['String'];
};


export type RepositoryLabelsArgs = {
  orderBy?: Maybe<LabelOrder>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  query?: Maybe<Scalars['String']>;
};


export type RepositoryLanguagesArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<LanguageOrder>;
};


export type RepositoryMentionableUsersArgs = {
  query?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type RepositoryMilestoneArgs = {
  number: Scalars['Int'];
};


export type RepositoryMilestonesArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  states?: Maybe<Array<MilestoneState>>;
  orderBy?: Maybe<MilestoneOrder>;
};


export type RepositoryObjectArgs = {
  oid?: Maybe<Scalars['GitObjectID']>;
  expression?: Maybe<Scalars['String']>;
};


export type RepositoryProjectArgs = {
  number: Scalars['Int'];
};


export type RepositoryProjectsArgs = {
  orderBy?: Maybe<ProjectOrder>;
  search?: Maybe<Scalars['String']>;
  states?: Maybe<Array<ProjectState>>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type RepositoryPullRequestArgs = {
  number: Scalars['Int'];
};


export type RepositoryPullRequestsArgs = {
  states?: Maybe<Array<PullRequestState>>;
  labels?: Maybe<Array<Scalars['String']>>;
  headRefName?: Maybe<Scalars['String']>;
  baseRefName?: Maybe<Scalars['String']>;
  orderBy?: Maybe<IssueOrder>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type RepositoryRefArgs = {
  qualifiedName: Scalars['String'];
};


export type RepositoryRefsArgs = {
  query?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  refPrefix: Scalars['String'];
  direction?: Maybe<OrderDirection>;
  orderBy?: Maybe<RefOrder>;
};


export type RepositoryRegistryPackagesArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  names?: Maybe<Array<Maybe<Scalars['String']>>>;
  repositoryId?: Maybe<Scalars['ID']>;
  packageType?: Maybe<RegistryPackageType>;
  registryPackageType?: Maybe<Scalars['String']>;
  publicOnly?: Maybe<Scalars['Boolean']>;
};


export type RepositoryRegistryPackagesForQueryArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  query?: Maybe<Scalars['String']>;
  packageType?: Maybe<RegistryPackageType>;
};


export type RepositoryReleaseArgs = {
  tagName: Scalars['String'];
};


export type RepositoryReleasesArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<ReleaseOrder>;
};


export type RepositoryRepositoryTopicsArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type RepositoryShortDescriptionHtmlArgs = {
  limit?: Maybe<Scalars['Int']>;
};


export type RepositoryStargazersArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<StarOrder>;
};


export type RepositorySubmodulesArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type RepositoryVulnerabilityAlertsArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type RepositoryWatchersArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};

export enum RepositoryAffiliation {
  Owner = 'OWNER',
  Collaborator = 'COLLABORATOR',
  OrganizationMember = 'ORGANIZATION_MEMBER'
}

export type RepositoryAuditEntryData = {
  repository?: Maybe<Repository>;
  repositoryName?: Maybe<Scalars['String']>;
  repositoryResourcePath?: Maybe<Scalars['URI']>;
  repositoryUrl?: Maybe<Scalars['URI']>;
};

export type RepositoryCollaboratorConnection = {
   __typename?: 'RepositoryCollaboratorConnection';
  edges?: Maybe<Array<Maybe<RepositoryCollaboratorEdge>>>;
  nodes?: Maybe<Array<Maybe<User>>>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type RepositoryCollaboratorEdge = {
   __typename?: 'RepositoryCollaboratorEdge';
  cursor: Scalars['String'];
  node: User;
  permission: RepositoryPermission;
  permissionSources?: Maybe<Array<PermissionSource>>;
};

export type RepositoryConnection = {
   __typename?: 'RepositoryConnection';
  edges?: Maybe<Array<Maybe<RepositoryEdge>>>;
  nodes?: Maybe<Array<Maybe<Repository>>>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
  totalDiskUsage: Scalars['Int'];
};

export enum RepositoryContributionType {
  Commit = 'COMMIT',
  Issue = 'ISSUE',
  PullRequest = 'PULL_REQUEST',
  Repository = 'REPOSITORY',
  PullRequestReview = 'PULL_REQUEST_REVIEW'
}

export type RepositoryEdge = {
   __typename?: 'RepositoryEdge';
  cursor: Scalars['String'];
  node?: Maybe<Repository>;
};

export type RepositoryInfo = {
  createdAt: Scalars['DateTime'];
  description?: Maybe<Scalars['String']>;
  descriptionHTML: Scalars['HTML'];
  forkCount: Scalars['Int'];
  hasIssuesEnabled: Scalars['Boolean'];
  hasProjectsEnabled: Scalars['Boolean'];
  hasWikiEnabled: Scalars['Boolean'];
  homepageUrl?: Maybe<Scalars['URI']>;
  isArchived: Scalars['Boolean'];
  isFork: Scalars['Boolean'];
  isLocked: Scalars['Boolean'];
  isMirror: Scalars['Boolean'];
  isPrivate: Scalars['Boolean'];
  isTemplate: Scalars['Boolean'];
  licenseInfo?: Maybe<License>;
  lockReason?: Maybe<RepositoryLockReason>;
  mirrorUrl?: Maybe<Scalars['URI']>;
  name: Scalars['String'];
  nameWithOwner: Scalars['String'];
  openGraphImageUrl: Scalars['URI'];
  owner: RepositoryOwner;
  pushedAt?: Maybe<Scalars['DateTime']>;
  resourcePath: Scalars['URI'];
  shortDescriptionHTML: Scalars['HTML'];
  updatedAt: Scalars['DateTime'];
  url: Scalars['URI'];
  usesCustomOpenGraphImage: Scalars['Boolean'];
};


export type RepositoryInfoShortDescriptionHtmlArgs = {
  limit?: Maybe<Scalars['Int']>;
};

export type RepositoryInvitation = Node & {
   __typename?: 'RepositoryInvitation';
  id: Scalars['ID'];
  invitee: User;
  inviter: User;
  permission: RepositoryPermission;
  repository?: Maybe<RepositoryInfo>;
};

export type RepositoryInvitationOrder = {
  field: RepositoryInvitationOrderField;
  direction: OrderDirection;
};

export enum RepositoryInvitationOrderField {
  CreatedAt = 'CREATED_AT',
  InviteeLogin = 'INVITEE_LOGIN'
}

export enum RepositoryLockReason {
  Moving = 'MOVING',
  Billing = 'BILLING',
  Rename = 'RENAME',
  Migrating = 'MIGRATING'
}

export type RepositoryNode = {
  repository: Repository;
};

export type RepositoryOrder = {
  field: RepositoryOrderField;
  direction: OrderDirection;
};

export enum RepositoryOrderField {
  CreatedAt = 'CREATED_AT',
  UpdatedAt = 'UPDATED_AT',
  PushedAt = 'PUSHED_AT',
  Name = 'NAME',
  Stargazers = 'STARGAZERS'
}

export type RepositoryOwner = {
  avatarUrl: Scalars['URI'];
  id: Scalars['ID'];
  login: Scalars['String'];
  /** @deprecated pinnedRepositories will be removed Use ProfileOwner.pinnedItems instead. Removal on 2019-10-01 UTC. */
  pinnedRepositories: RepositoryConnection;
  repositories: RepositoryConnection;
  repository?: Maybe<Repository>;
  resourcePath: Scalars['URI'];
  url: Scalars['URI'];
};


export type RepositoryOwnerAvatarUrlArgs = {
  size?: Maybe<Scalars['Int']>;
};


export type RepositoryOwnerPinnedRepositoriesArgs = {
  privacy?: Maybe<RepositoryPrivacy>;
  orderBy?: Maybe<RepositoryOrder>;
  affiliations?: Maybe<Array<Maybe<RepositoryAffiliation>>>;
  ownerAffiliations?: Maybe<Array<Maybe<RepositoryAffiliation>>>;
  isLocked?: Maybe<Scalars['Boolean']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type RepositoryOwnerRepositoriesArgs = {
  privacy?: Maybe<RepositoryPrivacy>;
  orderBy?: Maybe<RepositoryOrder>;
  affiliations?: Maybe<Array<Maybe<RepositoryAffiliation>>>;
  ownerAffiliations?: Maybe<Array<Maybe<RepositoryAffiliation>>>;
  isLocked?: Maybe<Scalars['Boolean']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  isFork?: Maybe<Scalars['Boolean']>;
};


export type RepositoryOwnerRepositoryArgs = {
  name: Scalars['String'];
};

export enum RepositoryPermission {
  Admin = 'ADMIN',
  Maintain = 'MAINTAIN',
  Write = 'WRITE',
  Triage = 'TRIAGE',
  Read = 'READ'
}

export enum RepositoryPrivacy {
  Public = 'PUBLIC',
  Private = 'PRIVATE'
}

export type RepositoryTopic = Node & UniformResourceLocatable & {
   __typename?: 'RepositoryTopic';
  id: Scalars['ID'];
  resourcePath: Scalars['URI'];
  topic: Topic;
  url: Scalars['URI'];
};

export type RepositoryTopicConnection = {
   __typename?: 'RepositoryTopicConnection';
  edges?: Maybe<Array<Maybe<RepositoryTopicEdge>>>;
  nodes?: Maybe<Array<Maybe<RepositoryTopic>>>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type RepositoryTopicEdge = {
   __typename?: 'RepositoryTopicEdge';
  cursor: Scalars['String'];
  node?: Maybe<RepositoryTopic>;
};

export enum RepositoryVisibility {
  Private = 'PRIVATE',
  Public = 'PUBLIC',
  Internal = 'INTERNAL'
}

export type RepositoryVisibilityChangeDisableAuditEntry = Node & AuditEntry & EnterpriseAuditEntryData & OrganizationAuditEntryData & {
   __typename?: 'RepositoryVisibilityChangeDisableAuditEntry';
  action: Scalars['String'];
  actor?: Maybe<AuditEntryActor>;
  actorIp?: Maybe<Scalars['String']>;
  actorLocation?: Maybe<ActorLocation>;
  actorLogin?: Maybe<Scalars['String']>;
  actorResourcePath?: Maybe<Scalars['URI']>;
  actorUrl?: Maybe<Scalars['URI']>;
  createdAt: Scalars['PreciseDateTime'];
  enterpriseResourcePath?: Maybe<Scalars['URI']>;
  enterpriseSlug?: Maybe<Scalars['String']>;
  enterpriseUrl?: Maybe<Scalars['URI']>;
  id: Scalars['ID'];
  operationType?: Maybe<OperationType>;
  organization?: Maybe<Organization>;
  organizationName?: Maybe<Scalars['String']>;
  organizationResourcePath?: Maybe<Scalars['URI']>;
  organizationUrl?: Maybe<Scalars['URI']>;
  user?: Maybe<User>;
  userLogin?: Maybe<Scalars['String']>;
  userResourcePath?: Maybe<Scalars['URI']>;
  userUrl?: Maybe<Scalars['URI']>;
};

export type RepositoryVisibilityChangeEnableAuditEntry = Node & AuditEntry & EnterpriseAuditEntryData & OrganizationAuditEntryData & {
   __typename?: 'RepositoryVisibilityChangeEnableAuditEntry';
  action: Scalars['String'];
  actor?: Maybe<AuditEntryActor>;
  actorIp?: Maybe<Scalars['String']>;
  actorLocation?: Maybe<ActorLocation>;
  actorLogin?: Maybe<Scalars['String']>;
  actorResourcePath?: Maybe<Scalars['URI']>;
  actorUrl?: Maybe<Scalars['URI']>;
  createdAt: Scalars['PreciseDateTime'];
  enterpriseResourcePath?: Maybe<Scalars['URI']>;
  enterpriseSlug?: Maybe<Scalars['String']>;
  enterpriseUrl?: Maybe<Scalars['URI']>;
  id: Scalars['ID'];
  operationType?: Maybe<OperationType>;
  organization?: Maybe<Organization>;
  organizationName?: Maybe<Scalars['String']>;
  organizationResourcePath?: Maybe<Scalars['URI']>;
  organizationUrl?: Maybe<Scalars['URI']>;
  user?: Maybe<User>;
  userLogin?: Maybe<Scalars['String']>;
  userResourcePath?: Maybe<Scalars['URI']>;
  userUrl?: Maybe<Scalars['URI']>;
};

export type RepositoryVulnerabilityAlert = Node & RepositoryNode & {
   __typename?: 'RepositoryVulnerabilityAlert';
  /** @deprecated advisory specific fields are being removed from repositoryVulnerabilityAlert objects Use `securityVulnerability.vulnerableVersionRange` instead. Removal on 2019-10-01 UTC. */
  affectedRange: Scalars['String'];
  createdAt: Scalars['DateTime'];
  dismissReason?: Maybe<Scalars['String']>;
  dismissedAt?: Maybe<Scalars['DateTime']>;
  dismisser?: Maybe<User>;
  /** @deprecated advisory specific fields are being removed from repositoryVulnerabilityAlert objects Use `securityAdvisory.identifiers` instead. Removal on 2019-10-01 UTC. */
  externalIdentifier?: Maybe<Scalars['String']>;
  /** @deprecated advisory specific fields are being removed from repositoryVulnerabilityAlert objects Use `securityAdvisory.references` instead. Removal on 2019-10-01 UTC. */
  externalReference: Scalars['String'];
  /** @deprecated advisory specific fields are being removed from repositoryVulnerabilityAlert objects Use `securityVulnerability.firstPatchedVersion` instead. Removal on 2019-10-01 UTC. */
  fixedIn?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  /** @deprecated advisory specific fields are being removed from repositoryVulnerabilityAlert objects Use `securityVulnerability.package` instead. Removal on 2019-10-01 UTC. */
  packageName: Scalars['String'];
  repository: Repository;
  securityAdvisory?: Maybe<SecurityAdvisory>;
  securityVulnerability?: Maybe<SecurityVulnerability>;
  vulnerableManifestFilename: Scalars['String'];
  vulnerableManifestPath: Scalars['String'];
  vulnerableRequirements?: Maybe<Scalars['String']>;
};

export type RepositoryVulnerabilityAlertConnection = {
   __typename?: 'RepositoryVulnerabilityAlertConnection';
  edges?: Maybe<Array<Maybe<RepositoryVulnerabilityAlertEdge>>>;
  nodes?: Maybe<Array<Maybe<RepositoryVulnerabilityAlert>>>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type RepositoryVulnerabilityAlertEdge = {
   __typename?: 'RepositoryVulnerabilityAlertEdge';
  cursor: Scalars['String'];
  node?: Maybe<RepositoryVulnerabilityAlert>;
};

export type RequestedReviewer = Mannequin | Team | User;

export type RequestReviewsInput = {
  pullRequestId: Scalars['ID'];
  userIds?: Maybe<Array<Scalars['ID']>>;
  teamIds?: Maybe<Array<Scalars['ID']>>;
  union?: Maybe<Scalars['Boolean']>;
  clientMutationId?: Maybe<Scalars['String']>;
};

export type RequestReviewsPayload = {
   __typename?: 'RequestReviewsPayload';
  actor?: Maybe<Actor>;
  clientMutationId?: Maybe<Scalars['String']>;
  pullRequest?: Maybe<PullRequest>;
  requestedReviewersEdge?: Maybe<UserEdge>;
};

export type ResolveReviewThreadInput = {
  threadId: Scalars['ID'];
  clientMutationId?: Maybe<Scalars['String']>;
};

export type ResolveReviewThreadPayload = {
   __typename?: 'ResolveReviewThreadPayload';
  clientMutationId?: Maybe<Scalars['String']>;
  thread?: Maybe<PullRequestReviewThread>;
};

export type RestrictedContribution = Contribution & {
   __typename?: 'RestrictedContribution';
  isRestricted: Scalars['Boolean'];
  occurredAt: Scalars['DateTime'];
  resourcePath: Scalars['URI'];
  url: Scalars['URI'];
  user: User;
};

export type ReviewDismissalAllowance = Node & {
   __typename?: 'ReviewDismissalAllowance';
  actor?: Maybe<ReviewDismissalAllowanceActor>;
  branchProtectionRule?: Maybe<BranchProtectionRule>;
  id: Scalars['ID'];
};

export type ReviewDismissalAllowanceActor = Team | User;

export type ReviewDismissalAllowanceConnection = {
   __typename?: 'ReviewDismissalAllowanceConnection';
  edges?: Maybe<Array<Maybe<ReviewDismissalAllowanceEdge>>>;
  nodes?: Maybe<Array<Maybe<ReviewDismissalAllowance>>>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type ReviewDismissalAllowanceEdge = {
   __typename?: 'ReviewDismissalAllowanceEdge';
  cursor: Scalars['String'];
  node?: Maybe<ReviewDismissalAllowance>;
};

export type ReviewDismissedEvent = Node & UniformResourceLocatable & {
   __typename?: 'ReviewDismissedEvent';
  actor?: Maybe<Actor>;
  createdAt: Scalars['DateTime'];
  databaseId?: Maybe<Scalars['Int']>;
  dismissalMessage?: Maybe<Scalars['String']>;
  dismissalMessageHTML?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  previousReviewState: PullRequestReviewState;
  pullRequest: PullRequest;
  pullRequestCommit?: Maybe<PullRequestCommit>;
  resourcePath: Scalars['URI'];
  review?: Maybe<PullRequestReview>;
  url: Scalars['URI'];
};

export type ReviewRequest = Node & {
   __typename?: 'ReviewRequest';
  databaseId?: Maybe<Scalars['Int']>;
  id: Scalars['ID'];
  pullRequest: PullRequest;
  requestedReviewer?: Maybe<RequestedReviewer>;
};

export type ReviewRequestConnection = {
   __typename?: 'ReviewRequestConnection';
  edges?: Maybe<Array<Maybe<ReviewRequestEdge>>>;
  nodes?: Maybe<Array<Maybe<ReviewRequest>>>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type ReviewRequestedEvent = Node & {
   __typename?: 'ReviewRequestedEvent';
  actor?: Maybe<Actor>;
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  pullRequest: PullRequest;
  requestedReviewer?: Maybe<RequestedReviewer>;
};

export type ReviewRequestEdge = {
   __typename?: 'ReviewRequestEdge';
  cursor: Scalars['String'];
  node?: Maybe<ReviewRequest>;
};

export type ReviewRequestRemovedEvent = Node & {
   __typename?: 'ReviewRequestRemovedEvent';
  actor?: Maybe<Actor>;
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  pullRequest: PullRequest;
  requestedReviewer?: Maybe<RequestedReviewer>;
};

export type ReviewStatusHovercardContext = HovercardContext & {
   __typename?: 'ReviewStatusHovercardContext';
  message: Scalars['String'];
  octicon: Scalars['String'];
  reviewDecision?: Maybe<PullRequestReviewDecision>;
};

export enum SamlDigestAlgorithm {
  Sha1 = 'SHA1',
  Sha256 = 'SHA256',
  Sha384 = 'SHA384',
  Sha512 = 'SHA512'
}

export enum SamlSignatureAlgorithm {
  RsaSha1 = 'RSA_SHA1',
  RsaSha256 = 'RSA_SHA256',
  RsaSha384 = 'RSA_SHA384',
  RsaSha512 = 'RSA_SHA512'
}

export type SavedReply = Node & {
   __typename?: 'SavedReply';
  body: Scalars['String'];
  bodyHTML: Scalars['HTML'];
  databaseId?: Maybe<Scalars['Int']>;
  id: Scalars['ID'];
  title: Scalars['String'];
  user?: Maybe<Actor>;
};

export type SavedReplyConnection = {
   __typename?: 'SavedReplyConnection';
  edges?: Maybe<Array<Maybe<SavedReplyEdge>>>;
  nodes?: Maybe<Array<Maybe<SavedReply>>>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type SavedReplyEdge = {
   __typename?: 'SavedReplyEdge';
  cursor: Scalars['String'];
  node?: Maybe<SavedReply>;
};

export type SavedReplyOrder = {
  field: SavedReplyOrderField;
  direction: OrderDirection;
};

export enum SavedReplyOrderField {
  UpdatedAt = 'UPDATED_AT'
}

export type SearchResultItem = App | Issue | MarketplaceListing | Organization | PullRequest | Repository | User;

export type SearchResultItemConnection = {
   __typename?: 'SearchResultItemConnection';
  codeCount: Scalars['Int'];
  edges?: Maybe<Array<Maybe<SearchResultItemEdge>>>;
  issueCount: Scalars['Int'];
  nodes?: Maybe<Array<Maybe<SearchResultItem>>>;
  pageInfo: PageInfo;
  repositoryCount: Scalars['Int'];
  userCount: Scalars['Int'];
  wikiCount: Scalars['Int'];
};

export type SearchResultItemEdge = {
   __typename?: 'SearchResultItemEdge';
  cursor: Scalars['String'];
  node?: Maybe<SearchResultItem>;
  textMatches?: Maybe<Array<Maybe<TextMatch>>>;
};

export enum SearchType {
  Issue = 'ISSUE',
  Repository = 'REPOSITORY',
  User = 'USER'
}

export type SecurityAdvisory = Node & {
   __typename?: 'SecurityAdvisory';
  databaseId?: Maybe<Scalars['Int']>;
  description: Scalars['String'];
  ghsaId: Scalars['String'];
  id: Scalars['ID'];
  identifiers: Array<SecurityAdvisoryIdentifier>;
  origin: Scalars['String'];
  permalink?: Maybe<Scalars['URI']>;
  publishedAt: Scalars['DateTime'];
  references: Array<SecurityAdvisoryReference>;
  severity: SecurityAdvisorySeverity;
  summary: Scalars['String'];
  updatedAt: Scalars['DateTime'];
  vulnerabilities: SecurityVulnerabilityConnection;
  withdrawnAt?: Maybe<Scalars['DateTime']>;
};


export type SecurityAdvisoryVulnerabilitiesArgs = {
  orderBy?: Maybe<SecurityVulnerabilityOrder>;
  ecosystem?: Maybe<SecurityAdvisoryEcosystem>;
  package?: Maybe<Scalars['String']>;
  severities?: Maybe<Array<SecurityAdvisorySeverity>>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};

export type SecurityAdvisoryConnection = {
   __typename?: 'SecurityAdvisoryConnection';
  edges?: Maybe<Array<Maybe<SecurityAdvisoryEdge>>>;
  nodes?: Maybe<Array<Maybe<SecurityAdvisory>>>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export enum SecurityAdvisoryEcosystem {
  Rubygems = 'RUBYGEMS',
  Npm = 'NPM',
  Pip = 'PIP',
  Maven = 'MAVEN',
  Nuget = 'NUGET',
  Composer = 'COMPOSER'
}

export type SecurityAdvisoryEdge = {
   __typename?: 'SecurityAdvisoryEdge';
  cursor: Scalars['String'];
  node?: Maybe<SecurityAdvisory>;
};

export type SecurityAdvisoryIdentifier = {
   __typename?: 'SecurityAdvisoryIdentifier';
  type: Scalars['String'];
  value: Scalars['String'];
};

export type SecurityAdvisoryIdentifierFilter = {
  type: SecurityAdvisoryIdentifierType;
  value: Scalars['String'];
};

export enum SecurityAdvisoryIdentifierType {
  Cve = 'CVE',
  Ghsa = 'GHSA'
}

export type SecurityAdvisoryOrder = {
  field: SecurityAdvisoryOrderField;
  direction: OrderDirection;
};

export enum SecurityAdvisoryOrderField {
  PublishedAt = 'PUBLISHED_AT',
  UpdatedAt = 'UPDATED_AT'
}

export type SecurityAdvisoryPackage = {
   __typename?: 'SecurityAdvisoryPackage';
  ecosystem: SecurityAdvisoryEcosystem;
  name: Scalars['String'];
};

export type SecurityAdvisoryPackageVersion = {
   __typename?: 'SecurityAdvisoryPackageVersion';
  identifier: Scalars['String'];
};

export type SecurityAdvisoryReference = {
   __typename?: 'SecurityAdvisoryReference';
  url: Scalars['URI'];
};

export enum SecurityAdvisorySeverity {
  Low = 'LOW',
  Moderate = 'MODERATE',
  High = 'HIGH',
  Critical = 'CRITICAL'
}

export type SecurityVulnerability = {
   __typename?: 'SecurityVulnerability';
  advisory: SecurityAdvisory;
  firstPatchedVersion?: Maybe<SecurityAdvisoryPackageVersion>;
  package: SecurityAdvisoryPackage;
  severity: SecurityAdvisorySeverity;
  updatedAt: Scalars['DateTime'];
  vulnerableVersionRange: Scalars['String'];
};

export type SecurityVulnerabilityConnection = {
   __typename?: 'SecurityVulnerabilityConnection';
  edges?: Maybe<Array<Maybe<SecurityVulnerabilityEdge>>>;
  nodes?: Maybe<Array<Maybe<SecurityVulnerability>>>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type SecurityVulnerabilityEdge = {
   __typename?: 'SecurityVulnerabilityEdge';
  cursor: Scalars['String'];
  node?: Maybe<SecurityVulnerability>;
};

export type SecurityVulnerabilityOrder = {
  field: SecurityVulnerabilityOrderField;
  direction: OrderDirection;
};

export enum SecurityVulnerabilityOrderField {
  UpdatedAt = 'UPDATED_AT'
}

export type SetEnterpriseIdentityProviderInput = {
  enterpriseId: Scalars['ID'];
  ssoUrl: Scalars['URI'];
  issuer?: Maybe<Scalars['String']>;
  idpCertificate: Scalars['String'];
  signatureMethod: SamlSignatureAlgorithm;
  digestMethod: SamlDigestAlgorithm;
  clientMutationId?: Maybe<Scalars['String']>;
};

export type SetEnterpriseIdentityProviderPayload = {
   __typename?: 'SetEnterpriseIdentityProviderPayload';
  clientMutationId?: Maybe<Scalars['String']>;
  identityProvider?: Maybe<EnterpriseIdentityProvider>;
};

export type SmimeSignature = GitSignature & {
   __typename?: 'SmimeSignature';
  email: Scalars['String'];
  isValid: Scalars['Boolean'];
  payload: Scalars['String'];
  signature: Scalars['String'];
  signer?: Maybe<User>;
  state: GitSignatureState;
  wasSignedByGitHub: Scalars['Boolean'];
};

export type Sponsorable = {
  sponsorsListing?: Maybe<SponsorsListing>;
  sponsorshipsAsMaintainer: SponsorshipConnection;
  sponsorshipsAsSponsor: SponsorshipConnection;
};


export type SponsorableSponsorshipsAsMaintainerArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  includePrivate?: Maybe<Scalars['Boolean']>;
  orderBy?: Maybe<SponsorshipOrder>;
};


export type SponsorableSponsorshipsAsSponsorArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<SponsorshipOrder>;
};

export type Sponsorship = Node & {
   __typename?: 'Sponsorship';
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  /** @deprecated `Sponsorship.maintainer` will be removed. Use `Sponsorship.sponsorable` instead. Removal on 2020-04-01 UTC. */
  maintainer: User;
  privacyLevel: SponsorshipPrivacy;
  sponsor?: Maybe<User>;
  sponsorable: Sponsorable;
  tier?: Maybe<SponsorsTier>;
};

export type SponsorshipConnection = {
   __typename?: 'SponsorshipConnection';
  edges?: Maybe<Array<Maybe<SponsorshipEdge>>>;
  nodes?: Maybe<Array<Maybe<Sponsorship>>>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type SponsorshipEdge = {
   __typename?: 'SponsorshipEdge';
  cursor: Scalars['String'];
  node?: Maybe<Sponsorship>;
};

export type SponsorshipOrder = {
  field: SponsorshipOrderField;
  direction: OrderDirection;
};

export enum SponsorshipOrderField {
  CreatedAt = 'CREATED_AT'
}

export enum SponsorshipPrivacy {
  Public = 'PUBLIC',
  Private = 'PRIVATE'
}

export type SponsorsListing = Node & {
   __typename?: 'SponsorsListing';
  createdAt: Scalars['DateTime'];
  fullDescription: Scalars['String'];
  fullDescriptionHTML: Scalars['HTML'];
  id: Scalars['ID'];
  name: Scalars['String'];
  shortDescription: Scalars['String'];
  slug: Scalars['String'];
  tiers?: Maybe<SponsorsTierConnection>;
};


export type SponsorsListingTiersArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<SponsorsTierOrder>;
};

export type SponsorsTier = Node & {
   __typename?: 'SponsorsTier';
  adminInfo?: Maybe<SponsorsTierAdminInfo>;
  createdAt: Scalars['DateTime'];
  description: Scalars['String'];
  descriptionHTML: Scalars['HTML'];
  id: Scalars['ID'];
  monthlyPriceInCents: Scalars['Int'];
  monthlyPriceInDollars: Scalars['Int'];
  name: Scalars['String'];
  sponsorsListing: SponsorsListing;
  updatedAt: Scalars['DateTime'];
};

export type SponsorsTierAdminInfo = {
   __typename?: 'SponsorsTierAdminInfo';
  sponsorships: SponsorshipConnection;
};


export type SponsorsTierAdminInfoSponsorshipsArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  includePrivate?: Maybe<Scalars['Boolean']>;
  orderBy?: Maybe<SponsorshipOrder>;
};

export type SponsorsTierConnection = {
   __typename?: 'SponsorsTierConnection';
  edges?: Maybe<Array<Maybe<SponsorsTierEdge>>>;
  nodes?: Maybe<Array<Maybe<SponsorsTier>>>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type SponsorsTierEdge = {
   __typename?: 'SponsorsTierEdge';
  cursor: Scalars['String'];
  node?: Maybe<SponsorsTier>;
};

export type SponsorsTierOrder = {
  field: SponsorsTierOrderField;
  direction: OrderDirection;
};

export enum SponsorsTierOrderField {
  CreatedAt = 'CREATED_AT',
  MonthlyPriceInCents = 'MONTHLY_PRICE_IN_CENTS'
}

export type StargazerConnection = {
   __typename?: 'StargazerConnection';
  edges?: Maybe<Array<Maybe<StargazerEdge>>>;
  nodes?: Maybe<Array<Maybe<User>>>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type StargazerEdge = {
   __typename?: 'StargazerEdge';
  cursor: Scalars['String'];
  node: User;
  starredAt: Scalars['DateTime'];
};

export type StarOrder = {
  field: StarOrderField;
  direction: OrderDirection;
};

export enum StarOrderField {
  StarredAt = 'STARRED_AT'
}

export type Starrable = {
  id: Scalars['ID'];
  stargazers: StargazerConnection;
  viewerHasStarred: Scalars['Boolean'];
};


export type StarrableStargazersArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<StarOrder>;
};

export type StarredRepositoryConnection = {
   __typename?: 'StarredRepositoryConnection';
  edges?: Maybe<Array<Maybe<StarredRepositoryEdge>>>;
  isOverLimit: Scalars['Boolean'];
  nodes?: Maybe<Array<Maybe<Repository>>>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type StarredRepositoryEdge = {
   __typename?: 'StarredRepositoryEdge';
  cursor: Scalars['String'];
  node: Repository;
  starredAt: Scalars['DateTime'];
};

export type Status = Node & {
   __typename?: 'Status';
  commit?: Maybe<Commit>;
  context?: Maybe<StatusContext>;
  contexts: Array<StatusContext>;
  id: Scalars['ID'];
  state: StatusState;
};


export type StatusContextArgs = {
  name: Scalars['String'];
};

export type StatusCheckRollup = Node & {
   __typename?: 'StatusCheckRollup';
  commit?: Maybe<Commit>;
  contexts: StatusCheckRollupContextConnection;
  id: Scalars['ID'];
  state: StatusState;
};


export type StatusCheckRollupContextsArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};

export type StatusCheckRollupContext = StatusContext;

export type StatusCheckRollupContextConnection = {
   __typename?: 'StatusCheckRollupContextConnection';
  edges?: Maybe<Array<Maybe<StatusCheckRollupContextEdge>>>;
  nodes?: Maybe<Array<Maybe<StatusCheckRollupContext>>>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type StatusCheckRollupContextEdge = {
   __typename?: 'StatusCheckRollupContextEdge';
  cursor: Scalars['String'];
  node?: Maybe<StatusCheckRollupContext>;
};

export type StatusContext = Node & {
   __typename?: 'StatusContext';
  avatarUrl?: Maybe<Scalars['URI']>;
  commit?: Maybe<Commit>;
  context: Scalars['String'];
  createdAt: Scalars['DateTime'];
  creator?: Maybe<Actor>;
  description?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  state: StatusState;
  targetUrl?: Maybe<Scalars['URI']>;
};


export type StatusContextAvatarUrlArgs = {
  size?: Maybe<Scalars['Int']>;
};

export enum StatusState {
  Expected = 'EXPECTED',
  Error = 'ERROR',
  Failure = 'FAILURE',
  Pending = 'PENDING',
  Success = 'SUCCESS'
}

export type SubmitPullRequestReviewInput = {
  pullRequestId?: Maybe<Scalars['ID']>;
  pullRequestReviewId?: Maybe<Scalars['ID']>;
  event: PullRequestReviewEvent;
  body?: Maybe<Scalars['String']>;
  clientMutationId?: Maybe<Scalars['String']>;
};

export type SubmitPullRequestReviewPayload = {
   __typename?: 'SubmitPullRequestReviewPayload';
  clientMutationId?: Maybe<Scalars['String']>;
  pullRequestReview?: Maybe<PullRequestReview>;
};

export type Submodule = {
   __typename?: 'Submodule';
  branch?: Maybe<Scalars['String']>;
  gitUrl: Scalars['URI'];
  name: Scalars['String'];
  path: Scalars['String'];
  subprojectCommitOid?: Maybe<Scalars['GitObjectID']>;
};

export type SubmoduleConnection = {
   __typename?: 'SubmoduleConnection';
  edges?: Maybe<Array<Maybe<SubmoduleEdge>>>;
  nodes?: Maybe<Array<Maybe<Submodule>>>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type SubmoduleEdge = {
   __typename?: 'SubmoduleEdge';
  cursor: Scalars['String'];
  node?: Maybe<Submodule>;
};

export type Subscribable = {
  id: Scalars['ID'];
  viewerCanSubscribe: Scalars['Boolean'];
  viewerSubscription?: Maybe<SubscriptionState>;
};

export type SubscribedEvent = Node & {
   __typename?: 'SubscribedEvent';
  actor?: Maybe<Actor>;
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  subscribable: Subscribable;
};

export enum SubscriptionState {
  Unsubscribed = 'UNSUBSCRIBED',
  Subscribed = 'SUBSCRIBED',
  Ignored = 'IGNORED'
}

export type SuggestedReviewer = {
   __typename?: 'SuggestedReviewer';
  isAuthor: Scalars['Boolean'];
  isCommenter: Scalars['Boolean'];
  reviewer: User;
};

export type Tag = Node & GitObject & {
   __typename?: 'Tag';
  abbreviatedOid: Scalars['String'];
  commitResourcePath: Scalars['URI'];
  commitUrl: Scalars['URI'];
  id: Scalars['ID'];
  message?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  oid: Scalars['GitObjectID'];
  repository: Repository;
  tagger?: Maybe<GitActor>;
  target: GitObject;
};

export type Team = Node & Subscribable & MemberStatusable & {
   __typename?: 'Team';
  ancestors: TeamConnection;
  avatarUrl?: Maybe<Scalars['URI']>;
  childTeams: TeamConnection;
  combinedSlug: Scalars['String'];
  createdAt: Scalars['DateTime'];
  description?: Maybe<Scalars['String']>;
  discussion?: Maybe<TeamDiscussion>;
  discussions: TeamDiscussionConnection;
  discussionsResourcePath: Scalars['URI'];
  discussionsUrl: Scalars['URI'];
  editTeamResourcePath: Scalars['URI'];
  editTeamUrl: Scalars['URI'];
  id: Scalars['ID'];
  invitations?: Maybe<OrganizationInvitationConnection>;
  memberStatuses: UserStatusConnection;
  members: TeamMemberConnection;
  membersResourcePath: Scalars['URI'];
  membersUrl: Scalars['URI'];
  name: Scalars['String'];
  newTeamResourcePath: Scalars['URI'];
  newTeamUrl: Scalars['URI'];
  organization: Organization;
  parentTeam?: Maybe<Team>;
  privacy: TeamPrivacy;
  repositories: TeamRepositoryConnection;
  repositoriesResourcePath: Scalars['URI'];
  repositoriesUrl: Scalars['URI'];
  resourcePath: Scalars['URI'];
  slug: Scalars['String'];
  teamsResourcePath: Scalars['URI'];
  teamsUrl: Scalars['URI'];
  updatedAt: Scalars['DateTime'];
  url: Scalars['URI'];
  viewerCanAdminister: Scalars['Boolean'];
  viewerCanSubscribe: Scalars['Boolean'];
  viewerSubscription?: Maybe<SubscriptionState>;
};


export type TeamAncestorsArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type TeamAvatarUrlArgs = {
  size?: Maybe<Scalars['Int']>;
};


export type TeamChildTeamsArgs = {
  orderBy?: Maybe<TeamOrder>;
  userLogins?: Maybe<Array<Scalars['String']>>;
  immediateOnly?: Maybe<Scalars['Boolean']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type TeamDiscussionArgs = {
  number: Scalars['Int'];
};


export type TeamDiscussionsArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  isPinned?: Maybe<Scalars['Boolean']>;
  orderBy?: Maybe<TeamDiscussionOrder>;
};


export type TeamInvitationsArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type TeamMemberStatusesArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<UserStatusOrder>;
};


export type TeamMembersArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  query?: Maybe<Scalars['String']>;
  membership?: Maybe<TeamMembershipType>;
  role?: Maybe<TeamMemberRole>;
  orderBy?: Maybe<TeamMemberOrder>;
};


export type TeamRepositoriesArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  query?: Maybe<Scalars['String']>;
  orderBy?: Maybe<TeamRepositoryOrder>;
};

export type TeamAddMemberAuditEntry = Node & AuditEntry & OrganizationAuditEntryData & TeamAuditEntryData & {
   __typename?: 'TeamAddMemberAuditEntry';
  action: Scalars['String'];
  actor?: Maybe<AuditEntryActor>;
  actorIp?: Maybe<Scalars['String']>;
  actorLocation?: Maybe<ActorLocation>;
  actorLogin?: Maybe<Scalars['String']>;
  actorResourcePath?: Maybe<Scalars['URI']>;
  actorUrl?: Maybe<Scalars['URI']>;
  createdAt: Scalars['PreciseDateTime'];
  id: Scalars['ID'];
  isLdapMapped?: Maybe<Scalars['Boolean']>;
  operationType?: Maybe<OperationType>;
  organization?: Maybe<Organization>;
  organizationName?: Maybe<Scalars['String']>;
  organizationResourcePath?: Maybe<Scalars['URI']>;
  organizationUrl?: Maybe<Scalars['URI']>;
  team?: Maybe<Team>;
  teamName?: Maybe<Scalars['String']>;
  teamResourcePath?: Maybe<Scalars['URI']>;
  teamUrl?: Maybe<Scalars['URI']>;
  user?: Maybe<User>;
  userLogin?: Maybe<Scalars['String']>;
  userResourcePath?: Maybe<Scalars['URI']>;
  userUrl?: Maybe<Scalars['URI']>;
};

export type TeamAddRepositoryAuditEntry = Node & AuditEntry & OrganizationAuditEntryData & RepositoryAuditEntryData & TeamAuditEntryData & {
   __typename?: 'TeamAddRepositoryAuditEntry';
  action: Scalars['String'];
  actor?: Maybe<AuditEntryActor>;
  actorIp?: Maybe<Scalars['String']>;
  actorLocation?: Maybe<ActorLocation>;
  actorLogin?: Maybe<Scalars['String']>;
  actorResourcePath?: Maybe<Scalars['URI']>;
  actorUrl?: Maybe<Scalars['URI']>;
  createdAt: Scalars['PreciseDateTime'];
  id: Scalars['ID'];
  isLdapMapped?: Maybe<Scalars['Boolean']>;
  operationType?: Maybe<OperationType>;
  organization?: Maybe<Organization>;
  organizationName?: Maybe<Scalars['String']>;
  organizationResourcePath?: Maybe<Scalars['URI']>;
  organizationUrl?: Maybe<Scalars['URI']>;
  repository?: Maybe<Repository>;
  repositoryName?: Maybe<Scalars['String']>;
  repositoryResourcePath?: Maybe<Scalars['URI']>;
  repositoryUrl?: Maybe<Scalars['URI']>;
  team?: Maybe<Team>;
  teamName?: Maybe<Scalars['String']>;
  teamResourcePath?: Maybe<Scalars['URI']>;
  teamUrl?: Maybe<Scalars['URI']>;
  user?: Maybe<User>;
  userLogin?: Maybe<Scalars['String']>;
  userResourcePath?: Maybe<Scalars['URI']>;
  userUrl?: Maybe<Scalars['URI']>;
};

export type TeamAuditEntryData = {
  team?: Maybe<Team>;
  teamName?: Maybe<Scalars['String']>;
  teamResourcePath?: Maybe<Scalars['URI']>;
  teamUrl?: Maybe<Scalars['URI']>;
};

export type TeamChangeParentTeamAuditEntry = Node & AuditEntry & OrganizationAuditEntryData & TeamAuditEntryData & {
   __typename?: 'TeamChangeParentTeamAuditEntry';
  action: Scalars['String'];
  actor?: Maybe<AuditEntryActor>;
  actorIp?: Maybe<Scalars['String']>;
  actorLocation?: Maybe<ActorLocation>;
  actorLogin?: Maybe<Scalars['String']>;
  actorResourcePath?: Maybe<Scalars['URI']>;
  actorUrl?: Maybe<Scalars['URI']>;
  createdAt: Scalars['PreciseDateTime'];
  id: Scalars['ID'];
  isLdapMapped?: Maybe<Scalars['Boolean']>;
  operationType?: Maybe<OperationType>;
  organization?: Maybe<Organization>;
  organizationName?: Maybe<Scalars['String']>;
  organizationResourcePath?: Maybe<Scalars['URI']>;
  organizationUrl?: Maybe<Scalars['URI']>;
  parentTeam?: Maybe<Team>;
  parentTeamName?: Maybe<Scalars['String']>;
  parentTeamNameWas?: Maybe<Scalars['String']>;
  parentTeamResourcePath?: Maybe<Scalars['URI']>;
  parentTeamUrl?: Maybe<Scalars['URI']>;
  parentTeamWas?: Maybe<Team>;
  parentTeamWasResourcePath?: Maybe<Scalars['URI']>;
  parentTeamWasUrl?: Maybe<Scalars['URI']>;
  team?: Maybe<Team>;
  teamName?: Maybe<Scalars['String']>;
  teamResourcePath?: Maybe<Scalars['URI']>;
  teamUrl?: Maybe<Scalars['URI']>;
  user?: Maybe<User>;
  userLogin?: Maybe<Scalars['String']>;
  userResourcePath?: Maybe<Scalars['URI']>;
  userUrl?: Maybe<Scalars['URI']>;
};

export type TeamConnection = {
   __typename?: 'TeamConnection';
  edges?: Maybe<Array<Maybe<TeamEdge>>>;
  nodes?: Maybe<Array<Maybe<Team>>>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type TeamDiscussion = Node & Comment & Deletable & Reactable & Subscribable & UniformResourceLocatable & Updatable & UpdatableComment & {
   __typename?: 'TeamDiscussion';
  author?: Maybe<Actor>;
  authorAssociation: CommentAuthorAssociation;
  body: Scalars['String'];
  bodyHTML: Scalars['HTML'];
  bodyText: Scalars['String'];
  bodyVersion: Scalars['String'];
  comments: TeamDiscussionCommentConnection;
  commentsResourcePath: Scalars['URI'];
  commentsUrl: Scalars['URI'];
  createdAt: Scalars['DateTime'];
  createdViaEmail: Scalars['Boolean'];
  databaseId?: Maybe<Scalars['Int']>;
  editor?: Maybe<Actor>;
  id: Scalars['ID'];
  includesCreatedEdit: Scalars['Boolean'];
  isPinned: Scalars['Boolean'];
  isPrivate: Scalars['Boolean'];
  lastEditedAt?: Maybe<Scalars['DateTime']>;
  number: Scalars['Int'];
  publishedAt?: Maybe<Scalars['DateTime']>;
  reactionGroups?: Maybe<Array<ReactionGroup>>;
  reactions: ReactionConnection;
  resourcePath: Scalars['URI'];
  team: Team;
  title: Scalars['String'];
  updatedAt: Scalars['DateTime'];
  url: Scalars['URI'];
  userContentEdits?: Maybe<UserContentEditConnection>;
  viewerCanDelete: Scalars['Boolean'];
  viewerCanPin: Scalars['Boolean'];
  viewerCanReact: Scalars['Boolean'];
  viewerCanSubscribe: Scalars['Boolean'];
  viewerCanUpdate: Scalars['Boolean'];
  viewerCannotUpdateReasons: Array<CommentCannotUpdateReason>;
  viewerDidAuthor: Scalars['Boolean'];
  viewerSubscription?: Maybe<SubscriptionState>;
};


export type TeamDiscussionCommentsArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<TeamDiscussionCommentOrder>;
  fromComment?: Maybe<Scalars['Int']>;
};


export type TeamDiscussionReactionsArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  content?: Maybe<ReactionContent>;
  orderBy?: Maybe<ReactionOrder>;
};


export type TeamDiscussionUserContentEditsArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};

export type TeamDiscussionComment = Node & Comment & Deletable & Reactable & UniformResourceLocatable & Updatable & UpdatableComment & {
   __typename?: 'TeamDiscussionComment';
  author?: Maybe<Actor>;
  authorAssociation: CommentAuthorAssociation;
  body: Scalars['String'];
  bodyHTML: Scalars['HTML'];
  bodyText: Scalars['String'];
  bodyVersion: Scalars['String'];
  createdAt: Scalars['DateTime'];
  createdViaEmail: Scalars['Boolean'];
  databaseId?: Maybe<Scalars['Int']>;
  discussion: TeamDiscussion;
  editor?: Maybe<Actor>;
  id: Scalars['ID'];
  includesCreatedEdit: Scalars['Boolean'];
  lastEditedAt?: Maybe<Scalars['DateTime']>;
  number: Scalars['Int'];
  publishedAt?: Maybe<Scalars['DateTime']>;
  reactionGroups?: Maybe<Array<ReactionGroup>>;
  reactions: ReactionConnection;
  resourcePath: Scalars['URI'];
  updatedAt: Scalars['DateTime'];
  url: Scalars['URI'];
  userContentEdits?: Maybe<UserContentEditConnection>;
  viewerCanDelete: Scalars['Boolean'];
  viewerCanReact: Scalars['Boolean'];
  viewerCanUpdate: Scalars['Boolean'];
  viewerCannotUpdateReasons: Array<CommentCannotUpdateReason>;
  viewerDidAuthor: Scalars['Boolean'];
};


export type TeamDiscussionCommentReactionsArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  content?: Maybe<ReactionContent>;
  orderBy?: Maybe<ReactionOrder>;
};


export type TeamDiscussionCommentUserContentEditsArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};

export type TeamDiscussionCommentConnection = {
   __typename?: 'TeamDiscussionCommentConnection';
  edges?: Maybe<Array<Maybe<TeamDiscussionCommentEdge>>>;
  nodes?: Maybe<Array<Maybe<TeamDiscussionComment>>>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type TeamDiscussionCommentEdge = {
   __typename?: 'TeamDiscussionCommentEdge';
  cursor: Scalars['String'];
  node?: Maybe<TeamDiscussionComment>;
};

export type TeamDiscussionCommentOrder = {
  field: TeamDiscussionCommentOrderField;
  direction: OrderDirection;
};

export enum TeamDiscussionCommentOrderField {
  Number = 'NUMBER'
}

export type TeamDiscussionConnection = {
   __typename?: 'TeamDiscussionConnection';
  edges?: Maybe<Array<Maybe<TeamDiscussionEdge>>>;
  nodes?: Maybe<Array<Maybe<TeamDiscussion>>>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type TeamDiscussionEdge = {
   __typename?: 'TeamDiscussionEdge';
  cursor: Scalars['String'];
  node?: Maybe<TeamDiscussion>;
};

export type TeamDiscussionOrder = {
  field: TeamDiscussionOrderField;
  direction: OrderDirection;
};

export enum TeamDiscussionOrderField {
  CreatedAt = 'CREATED_AT'
}

export type TeamEdge = {
   __typename?: 'TeamEdge';
  cursor: Scalars['String'];
  node?: Maybe<Team>;
};

export type TeamMemberConnection = {
   __typename?: 'TeamMemberConnection';
  edges?: Maybe<Array<Maybe<TeamMemberEdge>>>;
  nodes?: Maybe<Array<Maybe<User>>>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type TeamMemberEdge = {
   __typename?: 'TeamMemberEdge';
  cursor: Scalars['String'];
  memberAccessResourcePath: Scalars['URI'];
  memberAccessUrl: Scalars['URI'];
  node: User;
  role: TeamMemberRole;
};

export type TeamMemberOrder = {
  field: TeamMemberOrderField;
  direction: OrderDirection;
};

export enum TeamMemberOrderField {
  Login = 'LOGIN',
  CreatedAt = 'CREATED_AT'
}

export enum TeamMemberRole {
  Maintainer = 'MAINTAINER',
  Member = 'MEMBER'
}

export enum TeamMembershipType {
  Immediate = 'IMMEDIATE',
  ChildTeam = 'CHILD_TEAM',
  All = 'ALL'
}

export type TeamOrder = {
  field: TeamOrderField;
  direction: OrderDirection;
};

export enum TeamOrderField {
  Name = 'NAME'
}

export enum TeamPrivacy {
  Secret = 'SECRET',
  Visible = 'VISIBLE'
}

export type TeamRemoveMemberAuditEntry = Node & AuditEntry & OrganizationAuditEntryData & TeamAuditEntryData & {
   __typename?: 'TeamRemoveMemberAuditEntry';
  action: Scalars['String'];
  actor?: Maybe<AuditEntryActor>;
  actorIp?: Maybe<Scalars['String']>;
  actorLocation?: Maybe<ActorLocation>;
  actorLogin?: Maybe<Scalars['String']>;
  actorResourcePath?: Maybe<Scalars['URI']>;
  actorUrl?: Maybe<Scalars['URI']>;
  createdAt: Scalars['PreciseDateTime'];
  id: Scalars['ID'];
  isLdapMapped?: Maybe<Scalars['Boolean']>;
  operationType?: Maybe<OperationType>;
  organization?: Maybe<Organization>;
  organizationName?: Maybe<Scalars['String']>;
  organizationResourcePath?: Maybe<Scalars['URI']>;
  organizationUrl?: Maybe<Scalars['URI']>;
  team?: Maybe<Team>;
  teamName?: Maybe<Scalars['String']>;
  teamResourcePath?: Maybe<Scalars['URI']>;
  teamUrl?: Maybe<Scalars['URI']>;
  user?: Maybe<User>;
  userLogin?: Maybe<Scalars['String']>;
  userResourcePath?: Maybe<Scalars['URI']>;
  userUrl?: Maybe<Scalars['URI']>;
};

export type TeamRemoveRepositoryAuditEntry = Node & AuditEntry & OrganizationAuditEntryData & RepositoryAuditEntryData & TeamAuditEntryData & {
   __typename?: 'TeamRemoveRepositoryAuditEntry';
  action: Scalars['String'];
  actor?: Maybe<AuditEntryActor>;
  actorIp?: Maybe<Scalars['String']>;
  actorLocation?: Maybe<ActorLocation>;
  actorLogin?: Maybe<Scalars['String']>;
  actorResourcePath?: Maybe<Scalars['URI']>;
  actorUrl?: Maybe<Scalars['URI']>;
  createdAt: Scalars['PreciseDateTime'];
  id: Scalars['ID'];
  isLdapMapped?: Maybe<Scalars['Boolean']>;
  operationType?: Maybe<OperationType>;
  organization?: Maybe<Organization>;
  organizationName?: Maybe<Scalars['String']>;
  organizationResourcePath?: Maybe<Scalars['URI']>;
  organizationUrl?: Maybe<Scalars['URI']>;
  repository?: Maybe<Repository>;
  repositoryName?: Maybe<Scalars['String']>;
  repositoryResourcePath?: Maybe<Scalars['URI']>;
  repositoryUrl?: Maybe<Scalars['URI']>;
  team?: Maybe<Team>;
  teamName?: Maybe<Scalars['String']>;
  teamResourcePath?: Maybe<Scalars['URI']>;
  teamUrl?: Maybe<Scalars['URI']>;
  user?: Maybe<User>;
  userLogin?: Maybe<Scalars['String']>;
  userResourcePath?: Maybe<Scalars['URI']>;
  userUrl?: Maybe<Scalars['URI']>;
};

export type TeamRepositoryConnection = {
   __typename?: 'TeamRepositoryConnection';
  edges?: Maybe<Array<Maybe<TeamRepositoryEdge>>>;
  nodes?: Maybe<Array<Maybe<Repository>>>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type TeamRepositoryEdge = {
   __typename?: 'TeamRepositoryEdge';
  cursor: Scalars['String'];
  node: Repository;
  permission: RepositoryPermission;
};

export type TeamRepositoryOrder = {
  field: TeamRepositoryOrderField;
  direction: OrderDirection;
};

export enum TeamRepositoryOrderField {
  CreatedAt = 'CREATED_AT',
  UpdatedAt = 'UPDATED_AT',
  PushedAt = 'PUSHED_AT',
  Name = 'NAME',
  Permission = 'PERMISSION',
  Stargazers = 'STARGAZERS'
}

export enum TeamRole {
  Admin = 'ADMIN',
  Member = 'MEMBER'
}

export type TextMatch = {
   __typename?: 'TextMatch';
  fragment: Scalars['String'];
  highlights: Array<TextMatchHighlight>;
  property: Scalars['String'];
};

export type TextMatchHighlight = {
   __typename?: 'TextMatchHighlight';
  beginIndice: Scalars['Int'];
  endIndice: Scalars['Int'];
  text: Scalars['String'];
};

export type Topic = Node & Starrable & {
   __typename?: 'Topic';
  id: Scalars['ID'];
  name: Scalars['String'];
  relatedTopics: Array<Topic>;
  stargazers: StargazerConnection;
  viewerHasStarred: Scalars['Boolean'];
};


export type TopicRelatedTopicsArgs = {
  first?: Maybe<Scalars['Int']>;
};


export type TopicStargazersArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<StarOrder>;
};

export type TopicAuditEntryData = {
  topic?: Maybe<Topic>;
  topicName?: Maybe<Scalars['String']>;
};

export type TopicConnection = {
   __typename?: 'TopicConnection';
  edges?: Maybe<Array<Maybe<TopicEdge>>>;
  nodes?: Maybe<Array<Maybe<Topic>>>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type TopicEdge = {
   __typename?: 'TopicEdge';
  cursor: Scalars['String'];
  node?: Maybe<Topic>;
};

export enum TopicSuggestionDeclineReason {
  NotRelevant = 'NOT_RELEVANT',
  TooSpecific = 'TOO_SPECIFIC',
  PersonalPreference = 'PERSONAL_PREFERENCE',
  TooGeneral = 'TOO_GENERAL'
}

export type TransferIssueInput = {
  issueId: Scalars['ID'];
  repositoryId: Scalars['ID'];
  clientMutationId?: Maybe<Scalars['String']>;
};

export type TransferIssuePayload = {
   __typename?: 'TransferIssuePayload';
  clientMutationId?: Maybe<Scalars['String']>;
  issue?: Maybe<Issue>;
};

export type TransferredEvent = Node & {
   __typename?: 'TransferredEvent';
  actor?: Maybe<Actor>;
  createdAt: Scalars['DateTime'];
  fromRepository?: Maybe<Repository>;
  id: Scalars['ID'];
  issue: Issue;
};

export type Tree = Node & GitObject & {
   __typename?: 'Tree';
  abbreviatedOid: Scalars['String'];
  commitResourcePath: Scalars['URI'];
  commitUrl: Scalars['URI'];
  entries?: Maybe<Array<TreeEntry>>;
  id: Scalars['ID'];
  oid: Scalars['GitObjectID'];
  repository: Repository;
};

export type TreeEntry = {
   __typename?: 'TreeEntry';
  mode: Scalars['Int'];
  name: Scalars['String'];
  object?: Maybe<GitObject>;
  oid: Scalars['GitObjectID'];
  repository: Repository;
  submodule?: Maybe<Submodule>;
  type: Scalars['String'];
};

export type UnarchiveRepositoryInput = {
  repositoryId: Scalars['ID'];
  clientMutationId?: Maybe<Scalars['String']>;
};

export type UnarchiveRepositoryPayload = {
   __typename?: 'UnarchiveRepositoryPayload';
  clientMutationId?: Maybe<Scalars['String']>;
  repository?: Maybe<Repository>;
};

export type UnassignedEvent = Node & {
   __typename?: 'UnassignedEvent';
  actor?: Maybe<Actor>;
  assignable: Assignable;
  assignee?: Maybe<Assignee>;
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  /** @deprecated Assignees can now be mannequins. Use the `assignee` field instead. Removal on 2020-01-01 UTC. */
  user?: Maybe<User>;
};

export type UnfollowUserInput = {
  userId: Scalars['ID'];
  clientMutationId?: Maybe<Scalars['String']>;
};

export type UnfollowUserPayload = {
   __typename?: 'UnfollowUserPayload';
  clientMutationId?: Maybe<Scalars['String']>;
  user?: Maybe<User>;
};

export type UniformResourceLocatable = {
  resourcePath: Scalars['URI'];
  url: Scalars['URI'];
};

export type UnknownSignature = GitSignature & {
   __typename?: 'UnknownSignature';
  email: Scalars['String'];
  isValid: Scalars['Boolean'];
  payload: Scalars['String'];
  signature: Scalars['String'];
  signer?: Maybe<User>;
  state: GitSignatureState;
  wasSignedByGitHub: Scalars['Boolean'];
};

export type UnlabeledEvent = Node & {
   __typename?: 'UnlabeledEvent';
  actor?: Maybe<Actor>;
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  label: Label;
  labelable: Labelable;
};

export type UnlinkRepositoryFromProjectInput = {
  projectId: Scalars['ID'];
  repositoryId: Scalars['ID'];
  clientMutationId?: Maybe<Scalars['String']>;
};

export type UnlinkRepositoryFromProjectPayload = {
   __typename?: 'UnlinkRepositoryFromProjectPayload';
  clientMutationId?: Maybe<Scalars['String']>;
  project?: Maybe<Project>;
  repository?: Maybe<Repository>;
};

export type UnlockedEvent = Node & {
   __typename?: 'UnlockedEvent';
  actor?: Maybe<Actor>;
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  lockable: Lockable;
};

export type UnlockLockableInput = {
  lockableId: Scalars['ID'];
  clientMutationId?: Maybe<Scalars['String']>;
};

export type UnlockLockablePayload = {
   __typename?: 'UnlockLockablePayload';
  actor?: Maybe<Actor>;
  clientMutationId?: Maybe<Scalars['String']>;
  unlockedRecord?: Maybe<Lockable>;
};

export type UnmarkedAsDuplicateEvent = Node & {
   __typename?: 'UnmarkedAsDuplicateEvent';
  actor?: Maybe<Actor>;
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
};

export type UnmarkIssueAsDuplicateInput = {
  duplicateId: Scalars['ID'];
  canonicalId: Scalars['ID'];
  clientMutationId?: Maybe<Scalars['String']>;
};

export type UnmarkIssueAsDuplicatePayload = {
   __typename?: 'UnmarkIssueAsDuplicatePayload';
  clientMutationId?: Maybe<Scalars['String']>;
  duplicate?: Maybe<IssueOrPullRequest>;
};

export type UnminimizeCommentInput = {
  subjectId: Scalars['ID'];
  clientMutationId?: Maybe<Scalars['String']>;
};

export type UnminimizeCommentPayload = {
   __typename?: 'UnminimizeCommentPayload';
  clientMutationId?: Maybe<Scalars['String']>;
  unminimizedComment?: Maybe<Minimizable>;
};

export type UnpinnedEvent = Node & {
   __typename?: 'UnpinnedEvent';
  actor?: Maybe<Actor>;
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  issue: Issue;
};

export type UnresolveReviewThreadInput = {
  threadId: Scalars['ID'];
  clientMutationId?: Maybe<Scalars['String']>;
};

export type UnresolveReviewThreadPayload = {
   __typename?: 'UnresolveReviewThreadPayload';
  clientMutationId?: Maybe<Scalars['String']>;
  thread?: Maybe<PullRequestReviewThread>;
};

export type UnsubscribedEvent = Node & {
   __typename?: 'UnsubscribedEvent';
  actor?: Maybe<Actor>;
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  subscribable: Subscribable;
};

export type Updatable = {
  viewerCanUpdate: Scalars['Boolean'];
};

export type UpdatableComment = {
  viewerCannotUpdateReasons: Array<CommentCannotUpdateReason>;
};

export type UpdateBranchProtectionRuleInput = {
  branchProtectionRuleId: Scalars['ID'];
  pattern?: Maybe<Scalars['String']>;
  requiresApprovingReviews?: Maybe<Scalars['Boolean']>;
  requiredApprovingReviewCount?: Maybe<Scalars['Int']>;
  requiresCommitSignatures?: Maybe<Scalars['Boolean']>;
  isAdminEnforced?: Maybe<Scalars['Boolean']>;
  requiresStatusChecks?: Maybe<Scalars['Boolean']>;
  requiresStrictStatusChecks?: Maybe<Scalars['Boolean']>;
  requiresCodeOwnerReviews?: Maybe<Scalars['Boolean']>;
  dismissesStaleReviews?: Maybe<Scalars['Boolean']>;
  restrictsReviewDismissals?: Maybe<Scalars['Boolean']>;
  reviewDismissalActorIds?: Maybe<Array<Scalars['ID']>>;
  restrictsPushes?: Maybe<Scalars['Boolean']>;
  pushActorIds?: Maybe<Array<Scalars['ID']>>;
  requiredStatusCheckContexts?: Maybe<Array<Scalars['String']>>;
  clientMutationId?: Maybe<Scalars['String']>;
};

export type UpdateBranchProtectionRulePayload = {
   __typename?: 'UpdateBranchProtectionRulePayload';
  branchProtectionRule?: Maybe<BranchProtectionRule>;
  clientMutationId?: Maybe<Scalars['String']>;
};

export type UpdateEnterpriseActionExecutionCapabilitySettingInput = {
  enterpriseId: Scalars['ID'];
  capability: ActionExecutionCapabilitySetting;
  clientMutationId?: Maybe<Scalars['String']>;
};

export type UpdateEnterpriseActionExecutionCapabilitySettingPayload = {
   __typename?: 'UpdateEnterpriseActionExecutionCapabilitySettingPayload';
  clientMutationId?: Maybe<Scalars['String']>;
  enterprise?: Maybe<Enterprise>;
  message?: Maybe<Scalars['String']>;
};

export type UpdateEnterpriseAdministratorRoleInput = {
  enterpriseId: Scalars['ID'];
  login: Scalars['String'];
  role: EnterpriseAdministratorRole;
  clientMutationId?: Maybe<Scalars['String']>;
};

export type UpdateEnterpriseAdministratorRolePayload = {
   __typename?: 'UpdateEnterpriseAdministratorRolePayload';
  clientMutationId?: Maybe<Scalars['String']>;
  message?: Maybe<Scalars['String']>;
};

export type UpdateEnterpriseAllowPrivateRepositoryForkingSettingInput = {
  enterpriseId: Scalars['ID'];
  settingValue: EnterpriseEnabledDisabledSettingValue;
  clientMutationId?: Maybe<Scalars['String']>;
};

export type UpdateEnterpriseAllowPrivateRepositoryForkingSettingPayload = {
   __typename?: 'UpdateEnterpriseAllowPrivateRepositoryForkingSettingPayload';
  clientMutationId?: Maybe<Scalars['String']>;
  enterprise?: Maybe<Enterprise>;
  message?: Maybe<Scalars['String']>;
};

export type UpdateEnterpriseDefaultRepositoryPermissionSettingInput = {
  enterpriseId: Scalars['ID'];
  settingValue: EnterpriseDefaultRepositoryPermissionSettingValue;
  clientMutationId?: Maybe<Scalars['String']>;
};

export type UpdateEnterpriseDefaultRepositoryPermissionSettingPayload = {
   __typename?: 'UpdateEnterpriseDefaultRepositoryPermissionSettingPayload';
  clientMutationId?: Maybe<Scalars['String']>;
  enterprise?: Maybe<Enterprise>;
  message?: Maybe<Scalars['String']>;
};

export type UpdateEnterpriseMembersCanChangeRepositoryVisibilitySettingInput = {
  enterpriseId: Scalars['ID'];
  settingValue: EnterpriseEnabledDisabledSettingValue;
  clientMutationId?: Maybe<Scalars['String']>;
};

export type UpdateEnterpriseMembersCanChangeRepositoryVisibilitySettingPayload = {
   __typename?: 'UpdateEnterpriseMembersCanChangeRepositoryVisibilitySettingPayload';
  clientMutationId?: Maybe<Scalars['String']>;
  enterprise?: Maybe<Enterprise>;
  message?: Maybe<Scalars['String']>;
};

export type UpdateEnterpriseMembersCanCreateRepositoriesSettingInput = {
  enterpriseId: Scalars['ID'];
  settingValue?: Maybe<EnterpriseMembersCanCreateRepositoriesSettingValue>;
  membersCanCreateRepositoriesPolicyEnabled?: Maybe<Scalars['Boolean']>;
  membersCanCreatePublicRepositories?: Maybe<Scalars['Boolean']>;
  membersCanCreatePrivateRepositories?: Maybe<Scalars['Boolean']>;
  membersCanCreateInternalRepositories?: Maybe<Scalars['Boolean']>;
  clientMutationId?: Maybe<Scalars['String']>;
};

export type UpdateEnterpriseMembersCanCreateRepositoriesSettingPayload = {
   __typename?: 'UpdateEnterpriseMembersCanCreateRepositoriesSettingPayload';
  clientMutationId?: Maybe<Scalars['String']>;
  enterprise?: Maybe<Enterprise>;
  message?: Maybe<Scalars['String']>;
};

export type UpdateEnterpriseMembersCanDeleteIssuesSettingInput = {
  enterpriseId: Scalars['ID'];
  settingValue: EnterpriseEnabledDisabledSettingValue;
  clientMutationId?: Maybe<Scalars['String']>;
};

export type UpdateEnterpriseMembersCanDeleteIssuesSettingPayload = {
   __typename?: 'UpdateEnterpriseMembersCanDeleteIssuesSettingPayload';
  clientMutationId?: Maybe<Scalars['String']>;
  enterprise?: Maybe<Enterprise>;
  message?: Maybe<Scalars['String']>;
};

export type UpdateEnterpriseMembersCanDeleteRepositoriesSettingInput = {
  enterpriseId: Scalars['ID'];
  settingValue: EnterpriseEnabledDisabledSettingValue;
  clientMutationId?: Maybe<Scalars['String']>;
};

export type UpdateEnterpriseMembersCanDeleteRepositoriesSettingPayload = {
   __typename?: 'UpdateEnterpriseMembersCanDeleteRepositoriesSettingPayload';
  clientMutationId?: Maybe<Scalars['String']>;
  enterprise?: Maybe<Enterprise>;
  message?: Maybe<Scalars['String']>;
};

export type UpdateEnterpriseMembersCanInviteCollaboratorsSettingInput = {
  enterpriseId: Scalars['ID'];
  settingValue: EnterpriseEnabledDisabledSettingValue;
  clientMutationId?: Maybe<Scalars['String']>;
};

export type UpdateEnterpriseMembersCanInviteCollaboratorsSettingPayload = {
   __typename?: 'UpdateEnterpriseMembersCanInviteCollaboratorsSettingPayload';
  clientMutationId?: Maybe<Scalars['String']>;
  enterprise?: Maybe<Enterprise>;
  message?: Maybe<Scalars['String']>;
};

export type UpdateEnterpriseMembersCanMakePurchasesSettingInput = {
  enterpriseId: Scalars['ID'];
  settingValue: EnterpriseMembersCanMakePurchasesSettingValue;
  clientMutationId?: Maybe<Scalars['String']>;
};

export type UpdateEnterpriseMembersCanMakePurchasesSettingPayload = {
   __typename?: 'UpdateEnterpriseMembersCanMakePurchasesSettingPayload';
  clientMutationId?: Maybe<Scalars['String']>;
  enterprise?: Maybe<Enterprise>;
  message?: Maybe<Scalars['String']>;
};

export type UpdateEnterpriseMembersCanUpdateProtectedBranchesSettingInput = {
  enterpriseId: Scalars['ID'];
  settingValue: EnterpriseEnabledDisabledSettingValue;
  clientMutationId?: Maybe<Scalars['String']>;
};

export type UpdateEnterpriseMembersCanUpdateProtectedBranchesSettingPayload = {
   __typename?: 'UpdateEnterpriseMembersCanUpdateProtectedBranchesSettingPayload';
  clientMutationId?: Maybe<Scalars['String']>;
  enterprise?: Maybe<Enterprise>;
  message?: Maybe<Scalars['String']>;
};

export type UpdateEnterpriseMembersCanViewDependencyInsightsSettingInput = {
  enterpriseId: Scalars['ID'];
  settingValue: EnterpriseEnabledDisabledSettingValue;
  clientMutationId?: Maybe<Scalars['String']>;
};

export type UpdateEnterpriseMembersCanViewDependencyInsightsSettingPayload = {
   __typename?: 'UpdateEnterpriseMembersCanViewDependencyInsightsSettingPayload';
  clientMutationId?: Maybe<Scalars['String']>;
  enterprise?: Maybe<Enterprise>;
  message?: Maybe<Scalars['String']>;
};

export type UpdateEnterpriseOrganizationProjectsSettingInput = {
  enterpriseId: Scalars['ID'];
  settingValue: EnterpriseEnabledDisabledSettingValue;
  clientMutationId?: Maybe<Scalars['String']>;
};

export type UpdateEnterpriseOrganizationProjectsSettingPayload = {
   __typename?: 'UpdateEnterpriseOrganizationProjectsSettingPayload';
  clientMutationId?: Maybe<Scalars['String']>;
  enterprise?: Maybe<Enterprise>;
  message?: Maybe<Scalars['String']>;
};

export type UpdateEnterpriseProfileInput = {
  enterpriseId: Scalars['ID'];
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  websiteUrl?: Maybe<Scalars['String']>;
  location?: Maybe<Scalars['String']>;
  clientMutationId?: Maybe<Scalars['String']>;
};

export type UpdateEnterpriseProfilePayload = {
   __typename?: 'UpdateEnterpriseProfilePayload';
  clientMutationId?: Maybe<Scalars['String']>;
  enterprise?: Maybe<Enterprise>;
};

export type UpdateEnterpriseRepositoryProjectsSettingInput = {
  enterpriseId: Scalars['ID'];
  settingValue: EnterpriseEnabledDisabledSettingValue;
  clientMutationId?: Maybe<Scalars['String']>;
};

export type UpdateEnterpriseRepositoryProjectsSettingPayload = {
   __typename?: 'UpdateEnterpriseRepositoryProjectsSettingPayload';
  clientMutationId?: Maybe<Scalars['String']>;
  enterprise?: Maybe<Enterprise>;
  message?: Maybe<Scalars['String']>;
};

export type UpdateEnterpriseTeamDiscussionsSettingInput = {
  enterpriseId: Scalars['ID'];
  settingValue: EnterpriseEnabledDisabledSettingValue;
  clientMutationId?: Maybe<Scalars['String']>;
};

export type UpdateEnterpriseTeamDiscussionsSettingPayload = {
   __typename?: 'UpdateEnterpriseTeamDiscussionsSettingPayload';
  clientMutationId?: Maybe<Scalars['String']>;
  enterprise?: Maybe<Enterprise>;
  message?: Maybe<Scalars['String']>;
};

export type UpdateEnterpriseTwoFactorAuthenticationRequiredSettingInput = {
  enterpriseId: Scalars['ID'];
  settingValue: EnterpriseEnabledSettingValue;
  clientMutationId?: Maybe<Scalars['String']>;
};

export type UpdateEnterpriseTwoFactorAuthenticationRequiredSettingPayload = {
   __typename?: 'UpdateEnterpriseTwoFactorAuthenticationRequiredSettingPayload';
  clientMutationId?: Maybe<Scalars['String']>;
  enterprise?: Maybe<Enterprise>;
  message?: Maybe<Scalars['String']>;
};

export type UpdateIpAllowListEnabledSettingInput = {
  ownerId: Scalars['ID'];
  settingValue: IpAllowListEnabledSettingValue;
  clientMutationId?: Maybe<Scalars['String']>;
};

export type UpdateIpAllowListEnabledSettingPayload = {
   __typename?: 'UpdateIpAllowListEnabledSettingPayload';
  clientMutationId?: Maybe<Scalars['String']>;
  owner?: Maybe<IpAllowListOwner>;
};

export type UpdateIpAllowListEntryInput = {
  ipAllowListEntryId: Scalars['ID'];
  allowListValue: Scalars['String'];
  name?: Maybe<Scalars['String']>;
  isActive: Scalars['Boolean'];
  clientMutationId?: Maybe<Scalars['String']>;
};

export type UpdateIpAllowListEntryPayload = {
   __typename?: 'UpdateIpAllowListEntryPayload';
  clientMutationId?: Maybe<Scalars['String']>;
  ipAllowListEntry?: Maybe<IpAllowListEntry>;
};

export type UpdateIssueCommentInput = {
  id: Scalars['ID'];
  body: Scalars['String'];
  clientMutationId?: Maybe<Scalars['String']>;
};

export type UpdateIssueCommentPayload = {
   __typename?: 'UpdateIssueCommentPayload';
  clientMutationId?: Maybe<Scalars['String']>;
  issueComment?: Maybe<IssueComment>;
};

export type UpdateIssueInput = {
  id: Scalars['ID'];
  title?: Maybe<Scalars['String']>;
  body?: Maybe<Scalars['String']>;
  assigneeIds?: Maybe<Array<Scalars['ID']>>;
  milestoneId?: Maybe<Scalars['ID']>;
  labelIds?: Maybe<Array<Scalars['ID']>>;
  state?: Maybe<IssueState>;
  projectIds?: Maybe<Array<Scalars['ID']>>;
  clientMutationId?: Maybe<Scalars['String']>;
};

export type UpdateIssuePayload = {
   __typename?: 'UpdateIssuePayload';
  actor?: Maybe<Actor>;
  clientMutationId?: Maybe<Scalars['String']>;
  issue?: Maybe<Issue>;
};

export type UpdateProjectCardInput = {
  projectCardId: Scalars['ID'];
  isArchived?: Maybe<Scalars['Boolean']>;
  note?: Maybe<Scalars['String']>;
  clientMutationId?: Maybe<Scalars['String']>;
};

export type UpdateProjectCardPayload = {
   __typename?: 'UpdateProjectCardPayload';
  clientMutationId?: Maybe<Scalars['String']>;
  projectCard?: Maybe<ProjectCard>;
};

export type UpdateProjectColumnInput = {
  projectColumnId: Scalars['ID'];
  name: Scalars['String'];
  clientMutationId?: Maybe<Scalars['String']>;
};

export type UpdateProjectColumnPayload = {
   __typename?: 'UpdateProjectColumnPayload';
  clientMutationId?: Maybe<Scalars['String']>;
  projectColumn?: Maybe<ProjectColumn>;
};

export type UpdateProjectInput = {
  projectId: Scalars['ID'];
  name?: Maybe<Scalars['String']>;
  body?: Maybe<Scalars['String']>;
  state?: Maybe<ProjectState>;
  public?: Maybe<Scalars['Boolean']>;
  clientMutationId?: Maybe<Scalars['String']>;
};

export type UpdateProjectPayload = {
   __typename?: 'UpdateProjectPayload';
  clientMutationId?: Maybe<Scalars['String']>;
  project?: Maybe<Project>;
};

export type UpdatePullRequestInput = {
  pullRequestId: Scalars['ID'];
  baseRefName?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  body?: Maybe<Scalars['String']>;
  state?: Maybe<PullRequestUpdateState>;
  maintainerCanModify?: Maybe<Scalars['Boolean']>;
  assigneeIds?: Maybe<Array<Scalars['ID']>>;
  milestoneId?: Maybe<Scalars['ID']>;
  labelIds?: Maybe<Array<Scalars['ID']>>;
  projectIds?: Maybe<Array<Scalars['ID']>>;
  clientMutationId?: Maybe<Scalars['String']>;
};

export type UpdatePullRequestPayload = {
   __typename?: 'UpdatePullRequestPayload';
  actor?: Maybe<Actor>;
  clientMutationId?: Maybe<Scalars['String']>;
  pullRequest?: Maybe<PullRequest>;
};

export type UpdatePullRequestReviewCommentInput = {
  pullRequestReviewCommentId: Scalars['ID'];
  body: Scalars['String'];
  clientMutationId?: Maybe<Scalars['String']>;
};

export type UpdatePullRequestReviewCommentPayload = {
   __typename?: 'UpdatePullRequestReviewCommentPayload';
  clientMutationId?: Maybe<Scalars['String']>;
  pullRequestReviewComment?: Maybe<PullRequestReviewComment>;
};

export type UpdatePullRequestReviewInput = {
  pullRequestReviewId: Scalars['ID'];
  body: Scalars['String'];
  clientMutationId?: Maybe<Scalars['String']>;
};

export type UpdatePullRequestReviewPayload = {
   __typename?: 'UpdatePullRequestReviewPayload';
  clientMutationId?: Maybe<Scalars['String']>;
  pullRequestReview?: Maybe<PullRequestReview>;
};

export type UpdateRefInput = {
  refId: Scalars['ID'];
  oid: Scalars['GitObjectID'];
  force?: Maybe<Scalars['Boolean']>;
  clientMutationId?: Maybe<Scalars['String']>;
};

export type UpdateRefPayload = {
   __typename?: 'UpdateRefPayload';
  clientMutationId?: Maybe<Scalars['String']>;
  ref?: Maybe<Ref>;
};

export type UpdateRepositoryInput = {
  repositoryId: Scalars['ID'];
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  template?: Maybe<Scalars['Boolean']>;
  homepageUrl?: Maybe<Scalars['URI']>;
  hasWikiEnabled?: Maybe<Scalars['Boolean']>;
  hasIssuesEnabled?: Maybe<Scalars['Boolean']>;
  hasProjectsEnabled?: Maybe<Scalars['Boolean']>;
  clientMutationId?: Maybe<Scalars['String']>;
};

export type UpdateRepositoryPayload = {
   __typename?: 'UpdateRepositoryPayload';
  clientMutationId?: Maybe<Scalars['String']>;
  repository?: Maybe<Repository>;
};

export type UpdateSubscriptionInput = {
  subscribableId: Scalars['ID'];
  state: SubscriptionState;
  clientMutationId?: Maybe<Scalars['String']>;
};

export type UpdateSubscriptionPayload = {
   __typename?: 'UpdateSubscriptionPayload';
  clientMutationId?: Maybe<Scalars['String']>;
  subscribable?: Maybe<Subscribable>;
};

export type UpdateTeamDiscussionCommentInput = {
  id: Scalars['ID'];
  body: Scalars['String'];
  bodyVersion?: Maybe<Scalars['String']>;
  clientMutationId?: Maybe<Scalars['String']>;
};

export type UpdateTeamDiscussionCommentPayload = {
   __typename?: 'UpdateTeamDiscussionCommentPayload';
  clientMutationId?: Maybe<Scalars['String']>;
  teamDiscussionComment?: Maybe<TeamDiscussionComment>;
};

export type UpdateTeamDiscussionInput = {
  id: Scalars['ID'];
  title?: Maybe<Scalars['String']>;
  body?: Maybe<Scalars['String']>;
  bodyVersion?: Maybe<Scalars['String']>;
  pinned?: Maybe<Scalars['Boolean']>;
  clientMutationId?: Maybe<Scalars['String']>;
};

export type UpdateTeamDiscussionPayload = {
   __typename?: 'UpdateTeamDiscussionPayload';
  clientMutationId?: Maybe<Scalars['String']>;
  teamDiscussion?: Maybe<TeamDiscussion>;
};

export type UpdateTopicsInput = {
  repositoryId: Scalars['ID'];
  topicNames: Array<Scalars['String']>;
  clientMutationId?: Maybe<Scalars['String']>;
};

export type UpdateTopicsPayload = {
   __typename?: 'UpdateTopicsPayload';
  clientMutationId?: Maybe<Scalars['String']>;
  invalidTopicNames?: Maybe<Array<Scalars['String']>>;
  repository?: Maybe<Repository>;
};


export type User = Node & Actor & RegistryPackageOwner & RegistryPackageSearch & ProjectOwner & RepositoryOwner & UniformResourceLocatable & ProfileOwner & Sponsorable & {
   __typename?: 'User';
  anyPinnableItems: Scalars['Boolean'];
  avatarUrl: Scalars['URI'];
  bio?: Maybe<Scalars['String']>;
  bioHTML: Scalars['HTML'];
  commitComments: CommitCommentConnection;
  company?: Maybe<Scalars['String']>;
  companyHTML: Scalars['HTML'];
  contributionsCollection: ContributionsCollection;
  createdAt: Scalars['DateTime'];
  databaseId?: Maybe<Scalars['Int']>;
  email: Scalars['String'];
  followers: FollowerConnection;
  following: FollowingConnection;
  gist?: Maybe<Gist>;
  gistComments: GistCommentConnection;
  gists: GistConnection;
  hovercard: Hovercard;
  id: Scalars['ID'];
  isBountyHunter: Scalars['Boolean'];
  isCampusExpert: Scalars['Boolean'];
  isDeveloperProgramMember: Scalars['Boolean'];
  isEmployee: Scalars['Boolean'];
  isHireable: Scalars['Boolean'];
  isSiteAdmin: Scalars['Boolean'];
  isViewer: Scalars['Boolean'];
  issueComments: IssueCommentConnection;
  issues: IssueConnection;
  itemShowcase: ProfileItemShowcase;
  location?: Maybe<Scalars['String']>;
  login: Scalars['String'];
  name?: Maybe<Scalars['String']>;
  organization?: Maybe<Organization>;
  organizations: OrganizationConnection;
  pinnableItems: PinnableItemConnection;
  pinnedItems: PinnableItemConnection;
  pinnedItemsRemaining: Scalars['Int'];
  /** @deprecated pinnedRepositories will be removed Use ProfileOwner.pinnedItems instead. Removal on 2019-10-01 UTC. */
  pinnedRepositories: RepositoryConnection;
  project?: Maybe<Project>;
  projects: ProjectConnection;
  projectsResourcePath: Scalars['URI'];
  projectsUrl: Scalars['URI'];
  publicKeys: PublicKeyConnection;
  pullRequests: PullRequestConnection;
  /** @deprecated Renaming GitHub Packages fields and objects. Use the `PackageOwner` object instead. Removal on 2020-04-01 UTC. */
  registryPackages: RegistryPackageConnection;
  /** @deprecated Renaming GitHub Packages fields and objects. Use the `PackageSearch` object instead. Removal on 2020-04-01 UTC. */
  registryPackagesForQuery: RegistryPackageConnection;
  repositories: RepositoryConnection;
  repositoriesContributedTo: RepositoryConnection;
  repository?: Maybe<Repository>;
  resourcePath: Scalars['URI'];
  savedReplies?: Maybe<SavedReplyConnection>;
  sponsorsListing?: Maybe<SponsorsListing>;
  sponsorshipsAsMaintainer: SponsorshipConnection;
  sponsorshipsAsSponsor: SponsorshipConnection;
  starredRepositories: StarredRepositoryConnection;
  status?: Maybe<UserStatus>;
  topRepositories: RepositoryConnection;
  updatedAt: Scalars['DateTime'];
  url: Scalars['URI'];
  viewerCanChangePinnedItems: Scalars['Boolean'];
  viewerCanCreateProjects: Scalars['Boolean'];
  viewerCanFollow: Scalars['Boolean'];
  viewerIsFollowing: Scalars['Boolean'];
  watching: RepositoryConnection;
  websiteUrl?: Maybe<Scalars['URI']>;
};


export type UserAnyPinnableItemsArgs = {
  type?: Maybe<PinnableItemType>;
};


export type UserAvatarUrlArgs = {
  size?: Maybe<Scalars['Int']>;
};


export type UserCommitCommentsArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type UserContributionsCollectionArgs = {
  organizationID?: Maybe<Scalars['ID']>;
  from?: Maybe<Scalars['DateTime']>;
  to?: Maybe<Scalars['DateTime']>;
};


export type UserFollowersArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type UserFollowingArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type UserGistArgs = {
  name: Scalars['String'];
};


export type UserGistCommentsArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type UserGistsArgs = {
  privacy?: Maybe<GistPrivacy>;
  orderBy?: Maybe<GistOrder>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type UserHovercardArgs = {
  primarySubjectId?: Maybe<Scalars['ID']>;
};


export type UserIssueCommentsArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type UserIssuesArgs = {
  orderBy?: Maybe<IssueOrder>;
  labels?: Maybe<Array<Scalars['String']>>;
  states?: Maybe<Array<IssueState>>;
  filterBy?: Maybe<IssueFilters>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type UserOrganizationArgs = {
  login: Scalars['String'];
};


export type UserOrganizationsArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type UserPinnableItemsArgs = {
  types?: Maybe<Array<PinnableItemType>>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type UserPinnedItemsArgs = {
  types?: Maybe<Array<PinnableItemType>>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type UserPinnedRepositoriesArgs = {
  privacy?: Maybe<RepositoryPrivacy>;
  orderBy?: Maybe<RepositoryOrder>;
  affiliations?: Maybe<Array<Maybe<RepositoryAffiliation>>>;
  ownerAffiliations?: Maybe<Array<Maybe<RepositoryAffiliation>>>;
  isLocked?: Maybe<Scalars['Boolean']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type UserProjectArgs = {
  number: Scalars['Int'];
};


export type UserProjectsArgs = {
  orderBy?: Maybe<ProjectOrder>;
  search?: Maybe<Scalars['String']>;
  states?: Maybe<Array<ProjectState>>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type UserPublicKeysArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type UserPullRequestsArgs = {
  states?: Maybe<Array<PullRequestState>>;
  labels?: Maybe<Array<Scalars['String']>>;
  headRefName?: Maybe<Scalars['String']>;
  baseRefName?: Maybe<Scalars['String']>;
  orderBy?: Maybe<IssueOrder>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type UserRegistryPackagesArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  names?: Maybe<Array<Maybe<Scalars['String']>>>;
  repositoryId?: Maybe<Scalars['ID']>;
  packageType?: Maybe<RegistryPackageType>;
  registryPackageType?: Maybe<Scalars['String']>;
  publicOnly?: Maybe<Scalars['Boolean']>;
};


export type UserRegistryPackagesForQueryArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  query?: Maybe<Scalars['String']>;
  packageType?: Maybe<RegistryPackageType>;
};


export type UserRepositoriesArgs = {
  privacy?: Maybe<RepositoryPrivacy>;
  orderBy?: Maybe<RepositoryOrder>;
  affiliations?: Maybe<Array<Maybe<RepositoryAffiliation>>>;
  ownerAffiliations?: Maybe<Array<Maybe<RepositoryAffiliation>>>;
  isLocked?: Maybe<Scalars['Boolean']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  isFork?: Maybe<Scalars['Boolean']>;
};


export type UserRepositoriesContributedToArgs = {
  privacy?: Maybe<RepositoryPrivacy>;
  orderBy?: Maybe<RepositoryOrder>;
  isLocked?: Maybe<Scalars['Boolean']>;
  includeUserRepositories?: Maybe<Scalars['Boolean']>;
  contributionTypes?: Maybe<Array<Maybe<RepositoryContributionType>>>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type UserRepositoryArgs = {
  name: Scalars['String'];
};


export type UserSavedRepliesArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<SavedReplyOrder>;
};


export type UserSponsorshipsAsMaintainerArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  includePrivate?: Maybe<Scalars['Boolean']>;
  orderBy?: Maybe<SponsorshipOrder>;
};


export type UserSponsorshipsAsSponsorArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<SponsorshipOrder>;
};


export type UserStarredRepositoriesArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  ownedByViewer?: Maybe<Scalars['Boolean']>;
  orderBy?: Maybe<StarOrder>;
};


export type UserTopRepositoriesArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  orderBy: RepositoryOrder;
  since?: Maybe<Scalars['DateTime']>;
};


export type UserWatchingArgs = {
  privacy?: Maybe<RepositoryPrivacy>;
  orderBy?: Maybe<RepositoryOrder>;
  affiliations?: Maybe<Array<Maybe<RepositoryAffiliation>>>;
  ownerAffiliations?: Maybe<Array<Maybe<RepositoryAffiliation>>>;
  isLocked?: Maybe<Scalars['Boolean']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};

export enum UserBlockDuration {
  OneDay = 'ONE_DAY',
  ThreeDays = 'THREE_DAYS',
  OneWeek = 'ONE_WEEK',
  OneMonth = 'ONE_MONTH',
  Permanent = 'PERMANENT'
}

export type UserBlockedEvent = Node & {
   __typename?: 'UserBlockedEvent';
  actor?: Maybe<Actor>;
  blockDuration: UserBlockDuration;
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  subject?: Maybe<User>;
};

export type UserConnection = {
   __typename?: 'UserConnection';
  edges?: Maybe<Array<Maybe<UserEdge>>>;
  nodes?: Maybe<Array<Maybe<User>>>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type UserContentEdit = Node & {
   __typename?: 'UserContentEdit';
  createdAt: Scalars['DateTime'];
  deletedAt?: Maybe<Scalars['DateTime']>;
  deletedBy?: Maybe<Actor>;
  diff?: Maybe<Scalars['String']>;
  editedAt: Scalars['DateTime'];
  editor?: Maybe<Actor>;
  id: Scalars['ID'];
  updatedAt: Scalars['DateTime'];
};

export type UserContentEditConnection = {
   __typename?: 'UserContentEditConnection';
  edges?: Maybe<Array<Maybe<UserContentEditEdge>>>;
  nodes?: Maybe<Array<Maybe<UserContentEdit>>>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type UserContentEditEdge = {
   __typename?: 'UserContentEditEdge';
  cursor: Scalars['String'];
  node?: Maybe<UserContentEdit>;
};

export type UserEdge = {
   __typename?: 'UserEdge';
  cursor: Scalars['String'];
  node?: Maybe<User>;
};

export type UserStatus = Node & {
   __typename?: 'UserStatus';
  createdAt: Scalars['DateTime'];
  emoji?: Maybe<Scalars['String']>;
  emojiHTML?: Maybe<Scalars['HTML']>;
  expiresAt?: Maybe<Scalars['DateTime']>;
  id: Scalars['ID'];
  indicatesLimitedAvailability: Scalars['Boolean'];
  message?: Maybe<Scalars['String']>;
  organization?: Maybe<Organization>;
  updatedAt: Scalars['DateTime'];
  user: User;
};

export type UserStatusConnection = {
   __typename?: 'UserStatusConnection';
  edges?: Maybe<Array<Maybe<UserStatusEdge>>>;
  nodes?: Maybe<Array<Maybe<UserStatus>>>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type UserStatusEdge = {
   __typename?: 'UserStatusEdge';
  cursor: Scalars['String'];
  node?: Maybe<UserStatus>;
};

export type UserStatusOrder = {
  field: UserStatusOrderField;
  direction: OrderDirection;
};

export enum UserStatusOrderField {
  UpdatedAt = 'UPDATED_AT'
}

export type ViewerHovercardContext = HovercardContext & {
   __typename?: 'ViewerHovercardContext';
  message: Scalars['String'];
  octicon: Scalars['String'];
  viewer: User;
};


export type IssueListQueryVariables = {
  repo: Scalars['String'];
  owner: Scalars['String'];
};


export type IssueListQuery = (
  { __typename?: 'Query' }
  & { repository?: Maybe<(
    { __typename?: 'Repository' }
    & { issues: (
      { __typename?: 'IssueConnection' }
      & Pick<IssueConnection, 'totalCount'>
      & { nodes?: Maybe<Array<Maybe<(
        { __typename?: 'Issue' }
        & Pick<Issue, 'id' | 'number' | 'updatedAt' | 'url' | 'title' | 'createdAt'>
        & { labels?: Maybe<(
          { __typename?: 'LabelConnection' }
          & { nodes?: Maybe<Array<Maybe<(
            { __typename?: 'Label' }
            & Pick<Label, 'description' | 'name'>
          )>>> }
        )> }
      )>>>, pageInfo: (
        { __typename?: 'PageInfo' }
        & Pick<PageInfo, 'hasNextPage' | 'hasPreviousPage' | 'startCursor'>
      ) }
    ) }
  )> }
);

export type LoginQueryVariables = {};


export type LoginQuery = (
  { __typename?: 'Query' }
  & { viewer: (
    { __typename?: 'User' }
    & Pick<User, 'login'>
  ) }
);

export type RepoListQueryVariables = {
  login: Scalars['String'];
};


export type RepoListQuery = (
  { __typename?: 'Query' }
  & { user?: Maybe<(
    { __typename?: 'User' }
    & { repositories: (
      { __typename?: 'RepositoryConnection' }
      & { nodes?: Maybe<Array<Maybe<(
        { __typename?: 'Repository' }
        & Pick<Repository, 'name' | 'isPrivate'>
        & { owner: (
          { __typename?: 'Organization' }
          & Pick<Organization, 'login'>
        ) | (
          { __typename?: 'User' }
          & Pick<User, 'login'>
        ) }
      )>>> }
    ) }
  )> }
);


export const IssueListDocument = gql`
    query IssueList($repo: String!, $owner: String!) {
  repository(name: $repo, owner: $owner) {
    issues(first: 100, orderBy: {field: CREATED_AT, direction: ASC}) {
      nodes {
        id
        number
        updatedAt
        url
        title
        labels(first: 100) {
          nodes {
            description
            name
          }
        }
        createdAt
      }
      pageInfo {
        hasNextPage
        hasPreviousPage
        startCursor
      }
      totalCount
    }
  }
}
    `;
export type IssueListComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<IssueListQuery, IssueListQueryVariables>, 'query'> & ({ variables: IssueListQueryVariables; skip?: boolean; } | { skip: boolean; });

    export const IssueListComponent = (props: IssueListComponentProps) => (
      <ApolloReactComponents.Query<IssueListQuery, IssueListQueryVariables> query={IssueListDocument} {...props} />
    );
    
export type IssueListProps<TChildProps = {}> = ApolloReactHoc.DataProps<IssueListQuery, IssueListQueryVariables> & TChildProps;
export function withIssueList<TProps, TChildProps = {}>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  IssueListQuery,
  IssueListQueryVariables,
  IssueListProps<TChildProps>>) {
    return ApolloReactHoc.withQuery<TProps, IssueListQuery, IssueListQueryVariables, IssueListProps<TChildProps>>(IssueListDocument, {
      alias: 'issueList',
      ...operationOptions
    });
};

/**
 * __useIssueListQuery__
 *
 * To run a query within a React component, call `useIssueListQuery` and pass it any options that fit your needs.
 * When your component renders, `useIssueListQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useIssueListQuery({
 *   variables: {
 *      repo: // value for 'repo'
 *      owner: // value for 'owner'
 *   },
 * });
 */
export function useIssueListQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<IssueListQuery, IssueListQueryVariables>) {
        return ApolloReactHooks.useQuery<IssueListQuery, IssueListQueryVariables>(IssueListDocument, baseOptions);
      }
export function useIssueListLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<IssueListQuery, IssueListQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<IssueListQuery, IssueListQueryVariables>(IssueListDocument, baseOptions);
        }
export type IssueListQueryHookResult = ReturnType<typeof useIssueListQuery>;
export type IssueListLazyQueryHookResult = ReturnType<typeof useIssueListLazyQuery>;
export type IssueListQueryResult = ApolloReactCommon.QueryResult<IssueListQuery, IssueListQueryVariables>;
export const LoginDocument = gql`
    query Login {
  viewer {
    login
  }
}
    `;
export type LoginComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<LoginQuery, LoginQueryVariables>, 'query'>;

    export const LoginComponent = (props: LoginComponentProps) => (
      <ApolloReactComponents.Query<LoginQuery, LoginQueryVariables> query={LoginDocument} {...props} />
    );
    
export type LoginProps<TChildProps = {}> = ApolloReactHoc.DataProps<LoginQuery, LoginQueryVariables> & TChildProps;
export function withLogin<TProps, TChildProps = {}>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  LoginQuery,
  LoginQueryVariables,
  LoginProps<TChildProps>>) {
    return ApolloReactHoc.withQuery<TProps, LoginQuery, LoginQueryVariables, LoginProps<TChildProps>>(LoginDocument, {
      alias: 'login',
      ...operationOptions
    });
};

/**
 * __useLoginQuery__
 *
 * To run a query within a React component, call `useLoginQuery` and pass it any options that fit your needs.
 * When your component renders, `useLoginQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useLoginQuery({
 *   variables: {
 *   },
 * });
 */
export function useLoginQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<LoginQuery, LoginQueryVariables>) {
        return ApolloReactHooks.useQuery<LoginQuery, LoginQueryVariables>(LoginDocument, baseOptions);
      }
export function useLoginLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<LoginQuery, LoginQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<LoginQuery, LoginQueryVariables>(LoginDocument, baseOptions);
        }
export type LoginQueryHookResult = ReturnType<typeof useLoginQuery>;
export type LoginLazyQueryHookResult = ReturnType<typeof useLoginLazyQuery>;
export type LoginQueryResult = ApolloReactCommon.QueryResult<LoginQuery, LoginQueryVariables>;
export const RepoListDocument = gql`
    query RepoList($login: String!) {
  user(login: $login) {
    repositories(first: 100) {
      nodes {
        name
        owner {
          login
        }
        isPrivate
      }
    }
  }
}
    `;
export type RepoListComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<RepoListQuery, RepoListQueryVariables>, 'query'> & ({ variables: RepoListQueryVariables; skip?: boolean; } | { skip: boolean; });

    export const RepoListComponent = (props: RepoListComponentProps) => (
      <ApolloReactComponents.Query<RepoListQuery, RepoListQueryVariables> query={RepoListDocument} {...props} />
    );
    
export type RepoListProps<TChildProps = {}> = ApolloReactHoc.DataProps<RepoListQuery, RepoListQueryVariables> & TChildProps;
export function withRepoList<TProps, TChildProps = {}>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  RepoListQuery,
  RepoListQueryVariables,
  RepoListProps<TChildProps>>) {
    return ApolloReactHoc.withQuery<TProps, RepoListQuery, RepoListQueryVariables, RepoListProps<TChildProps>>(RepoListDocument, {
      alias: 'repoList',
      ...operationOptions
    });
};

/**
 * __useRepoListQuery__
 *
 * To run a query within a React component, call `useRepoListQuery` and pass it any options that fit your needs.
 * When your component renders, `useRepoListQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useRepoListQuery({
 *   variables: {
 *      login: // value for 'login'
 *   },
 * });
 */
export function useRepoListQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<RepoListQuery, RepoListQueryVariables>) {
        return ApolloReactHooks.useQuery<RepoListQuery, RepoListQueryVariables>(RepoListDocument, baseOptions);
      }
export function useRepoListLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<RepoListQuery, RepoListQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<RepoListQuery, RepoListQueryVariables>(RepoListDocument, baseOptions);
        }
export type RepoListQueryHookResult = ReturnType<typeof useRepoListQuery>;
export type RepoListLazyQueryHookResult = ReturnType<typeof useRepoListLazyQuery>;
export type RepoListQueryResult = ApolloReactCommon.QueryResult<RepoListQuery, RepoListQueryVariables>;