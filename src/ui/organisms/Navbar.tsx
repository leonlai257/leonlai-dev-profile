import Cross from '@src/assets/Navbar/Cross';
import Menu from '@src/assets/Navbar/Menu';
import { StaticImageData } from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { FlexBox, IconWrapper, Label, Nav } from '../atoms';
import { IconBox, LinkButton } from '../molecules';

export interface NavbarInterface {
    projectName: NavItem;
    items: NavItem[];
    launch: NavItem;
}

export interface NavItem {
    name: string;
    link: string;
}

export interface NavbarProps {
    logo: StaticImageData;
    navInfo: NavbarInterface;
    bp?: number;
}

export const Navbar = ({ logo, navInfo, bp = 900 }: NavbarProps) => {
    const [button, setButton] = useState(false);
    // const [buttonFocus, setButtonFocus] = useState(false);

    const showButton = () => {
        if (window.innerWidth <= bp) {
            setButton(() => true);
            // setButtonFocus(() => false);
        } else {
            setButton(() => false);
            // setButtonFocus(() => false);
        }
    };

    const setListener = () => {
        for (let i = 0; i < 5; i += 1) {
            if (typeof window === 'undefined') {
                setTimeout(() => {
                    console.log(
                        'could not find window object, going to retry ...'
                    );
                }, 1000);
            } else if (typeof window !== 'undefined') {
                window.addEventListener('resize', showButton);
                console.log('setting completed');
                break;
            }
        }
    };

    useEffect(() => {
        showButton();
        setListener();
    });

    return (
        <Nav>
            <FlexBox css={{ marginRight: 'auto', paddingLeft: '1.5rem' }}>
                <IconBox image={logo} alt="Icon" />
                <Label position="projectName">
                    <span>
                        <Link href={navInfo.projectName.link}>
                            {navInfo.projectName.name}
                        </Link>
                    </span>
                </Label>
            </FlexBox>
            {button ? (
                <MenuNavbar navInfo={navInfo} />
            ) : (
                <FullNavbar navInfo={navInfo} />
            )}
        </Nav>
    );
};

interface NavInfoProps {
    navInfo: NavbarInterface;
}

const FullNavbar = ({ navInfo }: NavInfoProps) => {
    return (
        <FlexBox>
            {navInfo.items.map((item: NavItem) => (
                <FlexBox key={item.name}>
                    <LinkButton
                        link={item.link}
                        text={item.name}
                        buttonCss={{
                            backgroundColor: 'gray',
                            color: '$textPrimary',
                            '&:hover': {
                                color: '$textSecondary',
                                backgroundColor: '$textPrimary',
                            },
                        }}
                    />
                </FlexBox>
            ))}
            {!navInfo.launch.name || (
                <FlexBox css={{ marginRight: '1rem' }}>
                    <LinkButton
                        link={navInfo.launch.link}
                        text={navInfo.launch.name}
                        buttonCss={{
                            backgroundColor: 'gray',
                            color: '$textPrimary',
                            '&:hover': {
                                color: '$textSecondary',
                                backgroundColor: '$textPrimary',
                            },
                        }}
                    />
                </FlexBox>
            )}
        </FlexBox>
    );
};

const MenuNavbar = ({ navInfo }: NavInfoProps) => {
    const [buttonFocus, setButtonFocus] = useState(false);
    return (
        <FlexBox
            type="menu"
            background={buttonFocus ? 'blur' : 'default'}
            transition="true">
            <FlexBox
                css={{
                    marginLeft: 'auto',
                    marginRight: '1rem',
                    flexDirection: 'column',
                }}>
                <FlexBox
                    onClick={() => {
                        setButtonFocus(!buttonFocus);
                    }}
                    css={{
                        margin: '1rem',
                        padding: '0.25rem',

                        '&:hover': {
                            cursor: 'pointer',
                        },
                    }}>
                    <IconWrapper size="small">
                        {buttonFocus ? <Cross /> : <Menu />}
                    </IconWrapper>
                </FlexBox>
            </FlexBox>
            {buttonFocus &&
                navInfo.items.map((item: NavItem) => (
                    <FlexBox key={item.name}>
                        <LinkButton
                            link={item.link}
                            text={item.name}
                            buttonCss={{
                                backgroundColor: 'transparent',
                                color: '$textPrimary',
                                '&:hover': { backgroundColor: '$gray200' },
                            }}
                        />
                    </FlexBox>
                ))}
        </FlexBox>
    );
};
