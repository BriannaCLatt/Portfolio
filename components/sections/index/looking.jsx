// Section structure
import Section 		from '../../structure/section';
import Container 	from '../../structure/container';

// Specing util
import Spacing 		from '../../utils/spacing.util';

// Section general blocks
import SectionGridBg from '../../blocks/section.grid.block'
import SectionTitle from '../../blocks/section.title.block'

// Section scss
import looking 		from '../../../styles/sections/index/looking.module.scss';
import section 		from '../../../styles/blocks/section.title.module.scss'

/**
 * Section: Looking
 * Declare your employment intentions 🚀
 * 
 * @returns {jsx} <Looking />
 */
export default function Looking() {
	return (
		<Section classProp={`${looking.section} borderBottom`}>	
			<Container classProp={`${section.title} ${looking.container}`} spacing={['verticalXXXLrg']}>
				<h4>I&apos;m currently looking for an entry-level position or internship.</h4>
				<h2 className={looking.json}>Entry-level : &#123;</h2>
				<h2 className={looking.jsonSub}><span className={looking.highlight}>User Interface Designer</span>,</h2>
				<h2 className={looking.jsonSub}><span className={looking.highlight2}>User Experience Designer</span></h2>
				<h2 className={looking.json}>&#125;</h2>
				<h4>I am particularily interested in product design and prototyping.</h4>
			</Container>
		</Section>
	)
}