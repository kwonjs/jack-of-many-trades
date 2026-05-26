import React from "react"

type EmbedProps = {
  data?: any; 
}

export class AI2HTMLEmbed extends React.Component<EmbedProps> {
  render() {
    return (
      <>
        <div
          dangerouslySetInnerHTML={{__html: this.props.data}}
        />
      </>
    )
  }
}