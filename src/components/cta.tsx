import * as React from 'react'

interface Props {
  title: string
  desc: string
  cta: string
 }

const CTA: React.StatelessComponent<Props> = (props)=> {
  const {title, desc, cta} = props
  return(
    <section className="ph3 ph5-ns pv5">
    <article className="mw8 center br2 ba b--light-blue bg-green">
      <div className="dt-ns dt--fixed-ns w-100">
        <div className="pa3 pa4-ns dtc-ns v-mid">
          <div>
            <h2 className="fw4 blue mt0 mb3">{title}</h2>
            <p className="black-70 measure lh-copy mv0">
              {desc}
            </p>
          </div>
        </div>
        <div className="pa3 pa4-ns dtc-ns v-mid">
          <a href="#" className="no-underline f6 tc db w-100 pv3 bg-animate bg-blue hover-bg-dark-blue white br2">{cta}</a>
        </div>
      </div>
    </article>
  </section>
  )
}

export {CTA}
