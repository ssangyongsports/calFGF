import { GetServerSidePropsContext, GetServerSidePropsResult } from "next";
import { CalendsoSessionUser } from "next-auth";

import prisma from "@calcom/prisma";

export type AppUser = CalendsoSessionUser | undefined;
export type AppPrisma = typeof prisma;
export type AppGetServerSidePropsContext = GetServerSidePropsContext<{
  appPages: string[];
}>;

export type AppGetServerSideProps = (
  context: AppGetServerSidePropsContext,
  prisma: AppPrisma,
  user: AppUser
) => GetServerSidePropsResult;
