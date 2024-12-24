import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { MemberService } from '../member/member.service';
import { Follower, Following } from '../../libs/dto/follow/follow';

@Injectable()
export class FollowService {
	constructor(
		@InjectModel('Follow') private readonly FollowModel: Model<Follower | Following>,
		private readonly memberService: MemberService,
	) {}
}
