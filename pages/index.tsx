import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import LoginCard from "../Components/LoginCard"
import CardHeader from "@material-tailwind/react/CardHeader";
import Card from "@material-tailwind/react/Card";
import H5 from "@material-tailwind/react/Heading5";
import CardBody from "@material-tailwind/react/CardBody";
import Input from "@material-tailwind/react/Input";
import Button from "@material-tailwind/react/Button";
const Home: NextPage = () => {
  return (
    <div className="">
      <Head>
        <title>To Do List</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Card>
          <CardHeader color="lightBlue" size="lg">
            <H5 color="white">Login</H5>
            
          </CardHeader>
          <CardBody>
            <div className="gap-y-2 flex flex-col">
              <div className="mx-auto">
                <Input
            type="text"
            color="lightBlue"
            size="lg"
            outline={true}
                placeholder="Email Address"
                
            />
              </div>
              <div className="mx-auto">
                <Input
            type="text"
            color="lightBlue"
            size="lg"
            outline={true}
                placeholder="Password"
                
            />
              </div>
           
            </div>
            <div className="p-2">
              <Button
            color="lightBlue"
            buttonType="filled"
            size="regular"
            rounded={true}
            block={false}
            iconOnly={false}
                ripple="light"
                className="mx-auto"
        >
            Login
              </Button>
              
              
            </div>
            <div className="p-2">
              <Button
            color="lightBlue"
            buttonType="filled"
            size="regular"
            rounded={true}
            block={false}
            iconOnly={false}
                ripple="light"
                className="mx-auto"
        >
            Register
              </Button>
              
              
            </div>
           
                
            </CardBody>
        </Card>
</main>
      

      
    </div>
  )
}

export default Home
