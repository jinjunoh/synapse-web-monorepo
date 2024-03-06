export type ReleaseCardStat = {
  label: string
  value: string
}

export type StatConfig = {
  // specifies which column should be used to populate the statistic value
  columnName: string
  // the label that will be displayed with the statistic in the card
  label: string
}

export type ButtonToExplorePageConfig = {
  // button's label
  label: string
  // column name in the data (table, view...) driving the page where the button is located
  // which is used to populate the button's path
  sourcePathColumnName: string
  // defining SQL for the data (table, view...) driving the Explore page
  // which is used in generating the button's query string
  exploreDataSql?: string
  // column name of the selected facet in the data (table, view...) driving the Explore page
  // which is used in generating the button's query string
  exploreDataFacetColumnName?: string
  // column name in the data (table, view...) driving the page where the button is located
  // which is used to to populate the value for the selected facet in the button's query string
  sourceDataFacetValueColumnName?: string
}

export type ReleaseCardLargeConfig = {
  cardSize: 'large'
  // whether the release version should be prefixed with "Release "
  prependRelease: boolean
  // statistics to display in the release card
  statsConfig: StatConfig[]
  // button to explore data in the release
  buttonToExplorePageConfig?: ButtonToExplorePageConfig
  // path to release's data guide
  dataGuidePath?: string
}

export type ReleaseCardMediumConfig = {
  cardSize: 'medium'
  // path to request access to the release data
  requestAccessPath: string
  // statistics to display in the release card
  statsConfig: StatConfig[]
}

export type ReleaseCardConfig = ReleaseCardLargeConfig | ReleaseCardMediumConfig