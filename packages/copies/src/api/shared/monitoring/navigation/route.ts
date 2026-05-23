import { currentDate } from '@repo/core/utils/dates';

// @ts-ignore
import * as actions from '@actions/userCookies.actions';
import { MonitoringNavigationTypes } from '@repo/core/providers/MonitoringProvider';
import fs from 'fs';
import { NextResponse } from 'next/server';
import path from 'path';

export const POST = async (req: Request) => {
  const body: { list: MonitoringNavigationTypes[] } = await req.json();

  const fileName = `${currentDate().gDate} navigation.txt`;
  const filePath = path.join(process.cwd(), 'monitoring_logs', fileName);

  fs.mkdirSync(path.dirname(filePath), { recursive: true });

  const fileExists = fs.existsSync(filePath);

  if (!fileExists) {
    const FILE_HEADER = 'Date  |  Login ID   |  From  |  To  |  Duration(ms) \n \n';
    fs.appendFileSync(filePath, FILE_HEADER);
  }

  const userData = await actions.getUserCookie();
  const loginId = userData && userData.loginId;

  let lines = '';
  body.list.forEach((item) => {
    lines = lines + `${item.date}  |  ${loginId}  |  ${item.from}  |  ${item.to}  |  ${item.duration}ms \n`;
  });

  if (lines) {
    fs.appendFileSync(filePath, lines);
  }

  return NextResponse.json({ ok: true });
};
