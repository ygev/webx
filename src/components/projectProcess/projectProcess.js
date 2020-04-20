import React from "react"
import { Link } from "gatsby"
import Layout from "../layout/layout"
import Pixelator from "../pixelator/pixelator"
import "../../css/global.css"
import "../../css/reset.css"
import "../../css/type.css"
import "./projectProcess.css"

export default props => (
    <>
        <Layout rows={[5, 5, 5]}>
          <section className="projectProcess">
              <h3 className="projectProcess__title"><Pixelator content="Process"/></h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Feugiat elit, consequat habitasse convallis. Tempus vitae ac, nulla sed massa, tempor. Velit maecenas tortor quis consequat elementum commodo et. Nulla egestas non sagittis, aliquam. Mauris, tincidunt nulla ut arcu egestas suspendisse ipsum, ornare mattis. Placerat pharetra, viverra habitant fringilla nec odio maecenas lectus faucibus. Facilisis sem mauris, ullamcorper senectus. Sed quisque pulvinar id tortor, euismod. Sapien arcu nisi tristique pharetra in. Pretium posuere sem faucibus adipiscing enim nulla velit se ipsum, ornare  enim, mae.</p>
          </section>
        </Layout>    
    </>
);  
