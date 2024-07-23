import React from 'react'
import { Card, CardContent, CardActionArea, CardMedia } from '@mui/material';
import Image from 'next/image'
import PeopleImage from '../../public/images/people.png'

interface ComponentProps {
    className: any
}

const _: React.FC<ComponentProps> = ({ className }) => {
    return (
        <Card className={className}>
            <CardActionArea>
                <CardMedia component="img" height="140" image='/images/people.png' alt="persona" className="rounded-lg" />
                <CardContent>
                <div className="font-thin">
                    Helena S.
                </div>
                <div className="p-8">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </div>
                </CardContent>
            </CardActionArea>
        </Card>
  )
}

export default _