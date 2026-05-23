import { currentDate } from '@repo/core/utils/dates';

// @ts-ignore
import * as actions from '@actions/userCookies.actions';
import { MonitoringApiTypes } from '@repo/core/providers/MonitoringProvider';
import fs from 'fs';
import { NextResponse } from 'next/server';
import path from 'path';

export const POST = async (req: Request) => {
  const body: { list: MonitoringApiTypes[] } = await req.json();

  const fileName = `${currentDate().gDate} api.txt`;
  const filePath = path.join(process.cwd(), 'monitoring_logs', fileName);

  fs.mkdirSync(path.dirname(filePath), { recursive: true });

  const fileExists = fs.existsSync(filePath);

  if (!fileExists) {
    const FILE_HEADER = 'Date  |  Login ID  |  API  |  Method  |  Status  |  Duration(ms) \n \n';
    fs.appendFileSync(filePath, FILE_HEADER);
  }

  const userData = await actions.getUserCookie();
  const loginId = userData && userData.loginId;

  let lines = '';
  body.list.forEach((item) => {
    lines =
      lines +
      `${item.date}  |  ${loginId}  |  ${item.api}  |  ${item.method}  |  ${item.status}  |  ${item.duration}ms \n`;
  });

  if (lines) {
    fs.appendFileSync(filePath, lines);
  }

  return NextResponse.json({ ok: true });
};
