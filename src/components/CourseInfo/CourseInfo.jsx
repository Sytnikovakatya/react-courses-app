import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

export default function CourseInfo() {
	return (
		<>
			<Container className='light shadow p-5'>
				<h1 className='text-center mb-5 pb-5'>Javascript</h1>
				<Row className='mb-5'>
					<Col md={{ span: 7, offset: 1 }}>
						<p>
							Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt hic
							neque debitis vitae nemo dignissimos molestias quos tempora enim
							qui accusantium labore et itaque unde reprehenderit, impedit
							velit. Dolor, earum. Lorem ipsum dolor sit amet consectetur
							adipisicing elit. Repellat iure necessitatibus, sit provident
							maiores ut ratione voluptates atque? Modi quidem alias praesentium
							amet animi dolores quam. Voluptas doloremque consectetur
							distinctio! Lorem ipsum dolor sit, amet consectetur adipisicing
							elit. At sed, in expedita iusto illo odit consequuntur, ullam
							laudantium fugit ex culpa repellat explicabo dignissimos
							praesentium. Maiores suscipit consectetur explicabo mollitia?
							Lorem ipsum dolor sit amet consectetur adipisicing elit.
							Recusandae, necessitatibus deleniti labore perferendis sint
							tenetur dolore, repellendus ratione temporibus quae tempora ipsam
							corporis? Expedita praesentium animi est excepturi molestiae
							totam. Lorem ipsum dolor sit amet consectetur, adipisicing elit.
							Architecto, animi facere atque vel esse provident fugiat, pariatur
							asperiores fugit ea ex fuga, voluptatibus quis sed eligendi.
							Deleniti qui ex quo. Lorem ipsum dolor, sit amet consectetur
							adipisicing elit. Asperiores minima totam sapiente ducimus quasi
							debitis? Officiis illum saepe quae, facere consectetur, numquam
							magni amet quas a nisi perferendis ratione ipsam? Lorem ipsum
							dolor, sit amet consectetur adipisicing elit. Corrupti praesentium
							officia et amet accusamus impedit odio sed saepe distinctio soluta
							voluptatibus, doloribus quod atque dolore, beatae dolor ab quis
							nostrum. Lorem ipsum dolor sit amet consectetur adipisicing elit.
							Harum minima quos hic earum mollitia aliquam, quae perspiciatis
							dolor exercitationem. Numquam esse, debitis ad iure obcaecati
							facilis mollitia nostrum unde sed?
						</p>
					</Col>
					<Col md={{ span: 3, offset: 1 }}>
						<p>
							<strong>ID: </strong>
							23Jjsksj-25-fdg-56ffg
						</p>
						<p>
							<strong>Duration: </strong>
							24:35 hours
						</p>
						<p>
							<strong>Created: </strong>
							11.12.2020
						</p>
						<p>
							<strong>Authors: </strong>
							Anna Sidorenko, Valentina Larina
						</p>
					</Col>
				</Row>
			</Container>
		</>
	);
}
